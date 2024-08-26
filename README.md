# Gestor de Compras para Constructora

## Descripción del Proyecto

Este proyecto es una aplicación web que facilita la gestión de compras de materiales para una constructora pequeña. La aplicación permite capturar y almacenar datos de materiales estructurales y de acabado, manejar listas de pedidos recientes y cancelados, y almacenar esta información de manera dinámica en Google Sheets.

## Funcionalidades

- **Captura de Materiales:** Permite capturar materiales estructurales y de acabado, tanto prediseñados como nuevos, a través de un formulario interactivo.
- **Integración con Google Sheets:** Los datos capturados se almacenan automáticamente en Google Sheets, lo que permite una gestión sencilla y centralizada de la información.
- **Gestión de Pedidos y Cancelaciones:** La aplicación muestra listas de los últimos pedidos y cancelaciones, organizadas por área de trabajo.
- **Navegación Dinámica:** Dependiendo del área seleccionada (Carpintería, Eléctrica, etc.), la aplicación muestra materiales y datos específicos para esa categoría.

## Estructura del Proyecto

├── 01-Style/ │ ├── styleMenuPrincipal.css │ ├── styleVentana3-1.css │ ├── styleVentana4.css │ └── styleFormulario.css ├── 01-Scripts/ │ ├── formulario.js │ ├── navigate.js │ └── google-sheets-api.js ├── index.html ├── ventana2.html ├── ventana3_1.html ├── ventana3_2.html ├── ventana4.html └── README.md



### Archivos Principales

- **index.html:** Página principal del gestor de compras.
- **ventana2.html:** Menú de selección de categorías (Estructural y Acabados).
- **ventana3_1.html:** Pantalla para gestionar materiales estructurales.
- **ventana3_2.html:** Pantalla para gestionar áreas de acabado.
- **ventana4.html:** Pantalla para visualizar y gestionar los materiales específicos de un área seleccionada.
- **01-Style/:** Carpeta que contiene los archivos CSS para el estilo de la aplicación.
- **01-Scripts/:** Carpeta que contiene los archivos JavaScript, incluyendo la lógica para el manejo de formularios, navegación dinámica y la integración con Google Sheets.

## Requisitos

- **Google Sheets API:** Para almacenar y manejar los datos de materiales y pedidos.
- **Navegador web:** La aplicación es compatible con los navegadores modernos (Chrome, Firefox, Edge).
- **Servidor web local:** Para pruebas locales (opcional).

## Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/gestor-compras-constructora.git
   cd gestor-compras-constructora
