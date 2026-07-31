# Mochila y Nos Fuimos — Rediseño conceptual

Proyecto realizado con Next.js, React, TypeScript y Tailwind CSS.

## Requisitos

- Node.js 22 o posterior.
- Visual Studio Code, Cursor o Visual Studio con soporte para Node.js.

## Ejecutarlo localmente

1. Descomprime el archivo.
2. Abre la carpeta `mochila-redesign-vscode` en Visual Studio Code o Cursor.
3. Abre la terminal integrada.
4. Ejecuta:

```bash
npm install
npm run dev
```

5. Abre `http://localhost:3000`.

## Crear una versión de producción

```bash
npm run build
npm start
```

## Publicarlo en Vercel

1. Sube la carpeta a un repositorio de GitHub.
2. Inicia sesión en Vercel.
3. Selecciona **Add New → Project**.
4. Importa el repositorio.
5. Conserva la configuración detectada de Next.js.
6. Selecciona **Deploy**.

La URL resultante tendrá el formato `nombre-del-proyecto.vercel.app`.

## Estructura principal

```text
app/
├── destinos/
│   └── [slug]/
│       └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

- `app/page.tsx`: portada, tarjetas, secciones y formulario demostrativo.
- `app/globals.css`: diseño visual y adaptación responsive.
- `app/destinos/[slug]/page.tsx`: páginas dinámicas de los destinos.
- `app/layout.tsx`: metadatos generales y configuración SEO.

## Consideraciones

- Las fotografías se cargan desde Unsplash y requieren conexión a internet.
- El formulario es demostrativo y no envía información.
- Los datos de viajes, fechas, precios e itinerarios son ilustrativos.
- La maqueta incluye `noindex` para no competir con el sitio oficial.
- Antes de convertirla en la web oficial deben validarse textos, imágenes,
  información comercial y permisos de uso de marca.
