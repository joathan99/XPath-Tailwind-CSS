// Obtener referencias a los elementos del DOM
let botonConsultar = document.getElementById("btn_Consultar");
let botonBorrar = document.getElementById("btn_Borrar");
let camposDatos = document.getElementById("resultsList"); // Se usa la lista de resultados
let contenedorResultados = document.getElementById("results"); // Contenedor de resultados

class PaginaWeb {
    constructor(url, xpath) {
        this.url = url;
        this.xpath = xpath;
    }
}

// Función para realizar el scraping
function realizarScraping(event) {
    event.preventDefault(); // 🔹 Evita que el formulario se envíe y recargue la página
    
    let url = document.getElementById("url").value;
    let xpath = document.getElementById("xpath").value;

    if (!url || !xpath) {
        alert("Por favor, ingresa una URL y un XPath válido.");
        return;
    }

    console.log(`Consultando: ${url} con XPath: ${xpath}`);

    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo obtener la página con allorigins.win.");
            }
            return response.json();
        })
        .then(data => procesarHTML(data.contents, xpath))
        .catch(error => {
            console.warn("Fallo con allorigins.win, probando con corsproxy.io", error);
            return fetch(`https://corsproxy.io/?${encodeURIComponent(url)}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("No se pudo obtener la página con corsproxy.io.");
                    }
                    return response.text();
                })
                .then(html => procesarHTML(html, xpath))
                .catch(error => {
                    console.error("Error en el scraping:", error);
                    alert("Ocurrió un error al realizar el scraping. La página podría estar bloqueando el acceso.");
                });
        });
}

// Función para procesar el HTML con XPath
function procesarHTML(html, xpath) {
    console.log("HTML Recibido:", html.substring(0, 500)); // Muestra los primeros 500 caracteres del HTML

    // Crear un DOM virtual
    let parser = new DOMParser();
    let doc = parser.parseFromString(html, "text/html");

    // Aplicar XPath
    let nodes = document.evaluate(xpath, doc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    // Limpiar resultados previos
    camposDatos.innerHTML = "";
    let encontrado = false;

    for (let i = 0; i < nodes.snapshotLength; i++) {
        encontrado = true;
        let elemento = document.createElement("li");
        elemento.textContent = nodes.snapshotItem(i).textContent.trim();
        elemento.classList.add("text-gray-700");
        camposDatos.appendChild(elemento);
    }

    if (!encontrado) {
        camposDatos.innerHTML = "<li class='text-red-500'>No se encontraron resultados.</li>";
    }

    contenedorResultados.classList.remove("hidden"); // Mostrar resultados
}
// Función para borrar resultados
function borrarResultados() {
    camposDatos.innerHTML = "<li class='text-gray-500'>Resultados borrados.</li>";
    contenedorResultados.classList.add("hidden"); // Ocultar resultados
}

// Asignar eventos a los botones
botonConsultar.addEventListener("click", realizarScraping);
botonBorrar.addEventListener("click", borrarResultados);
