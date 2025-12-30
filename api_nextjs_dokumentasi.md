# Dokumentasi Proyek Treact UI dan Panduan Migrasi ke Next.js

## Deskripsi Proyek

Treact UI adalah sebuah kumpulan template dan komponen React modern yang dibangun menggunakan TailwindCSS. Proyek ini menyediakan berbagai komponen UI yang dapat digunakan untuk membuat landing page dan halaman-halaman lainnya dengan tampilan yang menarik dan responsif.

### Teknologi yang Digunakan
- React (v18)
- TailwindCSS (v3)
- Styled Components
- Framer Motion (animasi)
- React Router DOM (routing)
- Twin.macro (integrasi Tailwind dengan styled-components)
- Feather Icons
- React Modal
- React Slick (carousel)

### Struktur Proyek
```
treact/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/          # Komponen UI utama
│   ├── demos/              # Demo halaman lengkap
│   ├── helpers/            # Fungsi bantuan
│   ├── images/             # Gambar dan assets
│   ├── pages/              # Halaman-halaman aplikasi
│   ├── styles/             # Gaya global
│   ├── App.js             # Komponen utama aplikasi
│   ├── ComponentRenderer.js # Renderer komponen dinamis
│   ├── MainLandingPage.js   # Halaman utama
│   ├── ThankYouPage.js      # Halaman terima kasih
│   ├── index.js            # Entry point aplikasi
│   └── tailwind.config.js   # Konfigurasi Tailwind
├── package.json
├── babel-plugin-macros.config.js
└── jsconfig.json
```

### Fitur Utama
- Lebih dari 100 komponen UI yang dapat digunakan
- Berbagai template landing page siap pakai
- Halaman-halaman tambahan (login, signup, pricing, dll)
- Animasi dan transisi yang halus
- Responsif untuk semua ukuran layar
- Dapat disesuaikan dengan warna brand

---

## Panduan Migrasi ke Next.js

Berikut adalah langkah-langkah untuk memindahkan proyek React ini ke Next.js:

### 1. Persiapan Awal

#### A. Install Next.js
```bash
# Dalam direktori proyek
npx create-next-app@latest
# atau
yarn create next-app
```

#### B. Pilih opsi yang sesuai:
- Direktori proyek: `.` (untuk mengganti proyek yang ada)
- Bahasa: JavaScript atau TypeScript
- CSS: Tailwind CSS
- ESLint: Ya
- App Router: Tidak (gunakan Pages Router untuk kemiripan dengan proyek saat ini)

### 2. Update Dependencies

#### A. Hapus dependensi yang tidak perlu
```bash
npm uninstall react-scripts
```

#### B. Tambahkan dependensi yang diperlukan
```bash
npm install styled-components framer-motion react-modal react-slick slick-carousel feather-icons twin.macro
```

#### C. Install dependensi untuk Next.js
```bash
npm install @next/font next-images
```

### 3. Konfigurasi Next.js

#### A. Buat file `next.config.js` di root direktori:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['treact.owaiskhan.me'], // Tambahkan domain gambar yang digunakan
  },
}

module.exports = nextConfig
```

#### B. Konfigurasi styled-components di `next.config.js`:
```javascript
const nextConfig = {
  // ... konfigurasi sebelumnya
}

// Untuk styled-components
const withTM = require('next-transpile-modules')(['twin.macro']);
module.exports = withTM(nextConfig);
```

#### C. Buat file `babel.config.js`:
```javascript
module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        fileName: true,
      },
    ],
    'babel-plugin-macros',
  ],
}
```

### 4. Konversi Struktur File

#### A. Pindahkan file-file dari `src/` ke `pages/` dan `components/` di Next.js

#### B. Konversi `src/index.js` ke `pages/_app.js`:
```javascript
import '../styles/globals.css';
import { createGlobalStyle } from 'styled-components';
import Modal from 'react-modal';

// Global Styles
const GlobalStyles = createGlobalStyle`
  /* tambahkan gaya global dari styles/GlobalStyles.js di sini */
`;

Modal.setAppElement('#__next');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

#### C. Konversi `src/App.js` ke `pages/index.js`:
```javascript
import React from "react";
import { components } from "components/ComponentRenderer"; // Sesuaikan path
import AnimationRevealPage from "helpers/AnimationRevealPage";

// Import halaman-halaman yang diperlukan
import MainLandingPage from "components/MainLandingPage";
import ThankYouPage from "components/ThankYouPage";

export default function Home() {
  return <MainLandingPage />;
}
```

### 5. Konversi Komponen React Router ke Next.js

#### A. Ganti import React Router:
```javascript
// Ganti ini:
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Dengan ini:
import { useRouter } from 'next/router';
```

#### B. Ganti struktur routing:
```javascript
// Di Next.js, routing dilakukan berdasarkan struktur folder di dalam pages/
// Contoh: pages/components/[type]/[subtype]/[name].js
```

### 6. Buat Halaman-Halaman Baru di Next.js

#### A. Buat `pages/components/[type]/[subtype]/[name].js`:
```javascript
import React from 'react';
import { useRouter } from 'next/router';
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { components } from "components/ComponentRenderer";

export default function ComponentPage() {
  const router = useRouter();
  const { type, subtype, name } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component = components[type][subtype]["elements"][name].component;
      return (
        <AnimationRevealPage disabled>
          <Component />
        </AnimationRevealPage>
      );
    } else {
      Component = components[type][name].component;
    }

    if(Component) {
      return <Component />;
    }

    throw new Error("Component Not Found");
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found</div>;
  }
}
```

#### B. Buat `pages/thank-you.js`:
```javascript
import React from "react";
import ThankYouPage from "components/ThankYouPage";

export default function ThankYou() {
  return <ThankYouPage />;
}
```

### 7. Update Konfigurasi Tailwind

#### A. Pastikan `tailwind.config.js` sesuai dengan Next.js:
```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Konfigurasi tema yang sama seperti sebelumnya
  },
  plugins: [],
}
```

### 8. Update File CSS

#### A. Pindahkan CSS global ke `styles/globals.css`:
```css
/* Import Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Tambahkan gaya global tambahan di sini */
```

### 9. Update Path Import

#### A. Sesuaikan semua import path karena struktur folder berubah:
```javascript
// Ganti import seperti ini:
import Component from "ComponentRenderer.js"; // Dulu
import Component from "../components/ComponentRenderer"; // Sekarang

// Gunakan absolute imports jika diatur di jsconfig.json:
import Component from "components/ComponentRenderer"; // Dengan absolute imports
```

### 10. Konfigurasi Absolute Imports (Opsional)

#### A. Update `jsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["*"],
      "@/components/*": ["components/*"],
      "@/helpers/*": ["helpers/*"],
      "@/styles/*": ["styles/*"],
      "@/images/*": ["images/*"]
    }
  }
}
```

### 11. Update Package.json

#### A. Ganti skrip di `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 12. Penyesuaian Khusus

#### A. Styled Components SSR:
Buat file `pages/_document.js`:
```javascript
import { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Document.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}
```

#### B. Update Meta Tags:
Gunakan `next/head` untuk mengelola meta tags:
```javascript
import Head from 'next/head'

function MyComponent() {
  return (
    <>
      <Head>
        <title>Free Modern React Templates & Components for building landing pages and UIs - Treact</title>
        <meta name="description" content="Easily customizable modern React UI Templates and Components built using TailwindCSS..." />
        {/* tambahkan meta tags lainnya */}
      </Head>
      {/* konten komponen */}
    </>
  )
}
```

### 13. Testing dan Debugging

#### A. Jalankan aplikasi:
```bash
npm run dev
```

#### B. Periksa error dan warning di konsol
#### C. Uji semua halaman dan komponen
#### D. Pastikan semua gambar dan assets dimuat dengan benar
#### E. Verifikasi bahwa animasi dan interaksi masih berfungsi

### 14. Optimasi Tambahan

#### A. Gunakan Image Component Next.js:
```javascript
import Image from 'next/image'

// Ganti tag img dengan komponen Image
<Image 
  src="/path/to/image.jpg" 
  alt="Deskripsi gambar"
  width={500}
  height={300}
  priority
/>
```

#### B. Implementasi Lazy Loading:
Gunakan `next/dynamic` untuk komponen yang jarang digunakan:
```javascript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

### 15. Deployment

#### A. Build aplikasi:
```bash
npm run build
```

#### B. Jalankan server produksi:
```bash
npm run start
```

#### C. Deploy ke platform pilihan (Vercel, Netlify, AWS, dll)

## Perubahan Penting yang Harus Dilakukan

1. **Routing**: Dari React Router ke sistem file-based routing Next.js
2. **Server-Side Rendering**: Konfigurasi SSR untuk styled-components
3. **Meta Tags**: Gunakan next/head alih-alih react-helmet
4. **Image Optimization**: Gunakan next/image alih-alih tag img biasa
5. **Environment Variables**: Sesuaikan dengan sistem Next.js
6. **API Routes**: Jika diperlukan, buat API routes di folder `pages/api`

## Tips Migrasi

1. **Backup**: Selalu backup proyek sebelum memulai migrasi
2. **Incremental**: Lakukan migrasi secara bertahap, satu komponen per satu
3. **Testing**: Uji setiap bagian setelah migrasi
4. **Documentation**: Catat perubahan yang dilakukan untuk referensi masa depan
5. **Performance**: Manfaatkan fitur optimasi Next.js seperti image optimization dan code splitting