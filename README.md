# Electro House

https://electro-house-swart.vercel.app/

Electro House es una tienda online de productos electrónicos desarrollada con React. El proyecto busca implementar las funcionalidades básicas de un ecommerce, con una interfaz sencilla, adaptable a distintos dispositivos y fácil de utilizar.

## Funcionalidades

- **Catálogo de productos:** carga y visualización de productos a partir de un archivo JSON local.
- **Carrito de compras:** espacio destinado a gestionar los productos seleccionados por el usuario.
- **Formulario de contacto:** permite a los usuarios completar sus datos y enviar consultas.
- **Navegación:** acceso a las distintas secciones de la tienda mediante React Router.
- **Diseño responsive:** interfaz adaptada a dispositivos móviles, tablets y computadoras.
- **Información del equipo:** presentación de los integrantes del proyecto en el pie de página.

## Tecnologías utilizadas

- **React:** desarrollo de la interfaz mediante componentes reutilizables.
- **JavaScript:** lógica e interactividad de la aplicación.
- **Vite:** entorno de desarrollo y herramienta de construcción.
- **Bootstrap:** estilos, grillas, utilidades de espaciado y adaptación responsive.
- **React Router DOM:** navegación entre las diferentes páginas.
- **CSS:** personalización visual de los componentes.
- **JSON:** almacenamiento local de los datos de productos y del equipo.

## Estructura del proyecto

La aplicación organiza sus archivos por responsabilidad para facilitar el mantenimiento y la incorporación de nuevas funcionalidades.

```text
public/
├── data/
│   └── nosotros.json
├── images/
└── products.json

src/
├── components/
│   ├── Header/
│   ├── Footer/
│   └── Layout/
├── pages/
│   ├── Home/
│   ├── Products/
│   └── Contact/
├── services/
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

La estructura puede incluir otros componentes y carpetas según las funcionalidades implementadas. Los componentes reutilizables se encuentran en `components`, mientras que `pages` agrupa las páginas asociadas a las rutas de la aplicación.

Los archivos JSON ubicados en `public` permiten cargar información local sin necesidad de conectarse a una API externa.

## Requisitos previos

Para ejecutar el proyecto localmente, necesitás tener instalado:

- [Node.js](https://nodejs.org/), preferentemente una versión LTS compatible con Vite.
- npm, incluido con Node.js.
- Git, si querés clonar el repositorio.

## Instalación y ejecución

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/fendvp/electro-house.git
   ```

2. Ingresá a la carpeta del proyecto:

   ```bash
   cd electro-hose
   ```

3. Instalá las dependencias:

   ```bash
   npm install
   ```

4. Iniciá el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abrí en el navegador la dirección local que indique Vite en la terminal, normalmente `http://localhost:5173`.

Para generar una versión de producción, ejecutá:

```bash
npm run build
```

El resultado se genera en la carpeta `dist`, lista para ser desplegada en un servicio de hosting compatible.

## Datos y recursos locales

Los productos se obtienen desde `public/products.json`, mientras que la información de los integrantes se encuentra en `public/data/nosotros.json`.

Las imágenes almacenadas en `public/images/` se sirven directamente desde la raíz del sitio. Por eso, sus rutas se referencian, por ejemplo, como `/images/masc.webp`.

Si modificás la ubicación o el nombre de estos archivos, también deberás actualizar las rutas correspondientes en el código.

## Diseño y experiencia de usuario

La interfaz utiliza una paleta de colores compartida mediante variables CSS y un diseño minimalista. Bootstrap se emplea para organizar el contenido, mantener un espaciado consistente y adaptar la distribución a diferentes tamaños de pantalla.

El objetivo es ofrecer una experiencia clara, con navegación sencilla y componentes visualmente coherentes en toda la tienda.

## Estado del proyecto

Electro House forma parte de un proyecto de desarrollo frontend orientado a aplicar conocimientos de React, componentes reutilizables, navegación, manejo de datos locales y diseño responsive.

Las funcionalidades pueden ampliarse progresivamente a medida que avance el desarrollo.

## Autoría

Proyecto académico desarrollado como práctica de desarrollo web frontend.
