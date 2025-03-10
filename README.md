📌 README.md (Configuración del Proyecto y Desarrollo)
md
Copiar
Editar
# 🌐 Web Scraping con JavaScript  

Este proyecto es una aplicación web que permite realizar scraping de contenido web de manera asíncrona desde el navegador. Los usuarios pueden ingresar una URL y un XPath para extraer información del HTML de una página y visualizar los resultados.

## 📌 Instalación y Configuración  

### **1️⃣ Requisitos Previos**  
Para ejecutar este proyecto, asegúrate de tener instalado en tu sistema:  
- **Node.js** y **npm** → [Descargar aquí](https://nodejs.org/)  
- **Git** (opcional, para clonar el repositorio)  
- **Visual Studio Code** (opcional, recomendado para editar el código)  

---

### **2️⃣ Clonar el Repositorio**  
Si aún no tienes el proyecto en tu equipo, clónalo con:  

```sh
git clone https://github.com/joathan99/XPath-Tailwind-CSS.git
cd tu-repositorio
3️⃣ Instalación de Dependencias
Ejecuta el siguiente comando para instalar Tailwind CSS y PostCSS:

sh
Copiar
Editar
npm install
Esto instalará las librerías necesarias para compilar los estilos correctamente.

4️⃣ Configuración de Tailwind CSS
Para que Tailwind CSS funcione correctamente, configuramos el entorno de desarrollo siguiendo estos pasos:

Instalamos Tailwind y PostCSS con:
sh
Copiar
Editar
npm install tailwindcss @tailwindcss/postcss postcss
Creamos y configuramos el archivo postcss.config.mjs con el siguiente contenido:
js
Copiar
Editar
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
En styles.css, importamos Tailwind CSS con:
css
Copiar
Editar
@import "tailwindcss";
5️⃣ Compilación de los Estilos
Para generar el archivo dist/styles.css, ejecutamos:

sh
Copiar
Editar
npm run dev
Esto iniciará el proceso de compilación de los estilos y generará el CSS listo para usar.

📌 Ejecución del Proyecto
1️⃣ Iniciar el Servidor Local (Opcional)
Si deseas visualizar la aplicación en un entorno local, puedes usar Five Server o Live Server en VS Code.
Si no tienes Live Server instalado, puedes hacerlo con:

sh
Copiar
Editar
npm install -g live-server
Luego, inicia el servidor con:

sh
Copiar
Editar
live-server
Esto abrirá automáticamente index.html en tu navegador.

📌 Desarrollo y Estructura del Proyecto
El proyecto sigue una estructura clara y organizada en un entorno MVC simple:

bash
Copiar
Editar
📂 Tarea1
 ┣ 📂 dist
 ┃ ┗ 📜 styles.css       # Estilos compilados de Tailwind CSS
 ┣ 📂 node_modules       # Dependencias de Node.js
 ┣ 📂 src
 ┃ ┣ 📜 script.js        # Lógica de scraping con JavaScript
 ┣ 📜 index.html         # Interfaz principal del proyecto
 ┣ 📜 package.json       # Configuración del proyecto en Node.js
 ┗ 📜 README.md          # Documentación del proyecto
📌 Funcionalidad de script.js
El archivo script.js contiene la lógica para:
✅ Obtener la URL ingresada por el usuario.
✅ Aplicar un XPath sobre el HTML obtenido.
✅ Mostrar los resultados en la interfaz de usuario.
✅ Manejar errores cuando una página bloquea el scraping.
✅ Borrar los resultados cuando sea necesario.

📌 Tecnologías Utilizadas
JavaScript (Frontend) – Manejo del scraping y manipulación del DOM.
Tailwind CSS – Estilización moderna y responsiva.
PostCSS – Generación de estilos.
Fetch API – Obtención de datos de las páginas web.
📌 Estado del Proyecto
✅ El scraping funciona correctamente en páginas sin restricciones de CORS.
✅ La interfaz ha sido mejorada con Tailwind CSS.
✅ El sistema maneja errores cuando una página bloquea el acceso.
🔹 Podría mejorarse el soporte para más páginas usando un backend en el futuro.

📌 Autor
Desarrollado por [Jonathan Alexander Sánchez Rosillo] ✨