# QRForge Scanner

QRForge Scanner is a modern QR code generator and scanner built with React, TypeScript, Vite, and TanStack Start.

Generate QR codes from text, URLs, contact information, Wi-Fi credentials, and more. Scan QR codes using your device camera or upload an image for instant decoding.

## Features

### QR Code Generator

* Generate QR codes from text and URLs
* Custom foreground and background colors
* Adjustable error correction levels
* High-quality PNG downloads
* Instant live preview

### QR Code Scanner

* Scan QR codes using your device camera
* Decode QR codes from uploaded images
* Automatic QR content detection
* Copy scanned results to clipboard
* Mobile-friendly camera support

### User Experience

* Responsive design
* Dark mode support
* Fast client-side processing
* No account required
* Free to use

## Privacy

QRForge Scanner processes QR codes locally in your browser whenever possible.

* Camera access is only used for scanning QR codes
* Uploaded images are processed locally
* No camera stream is stored
* No personal information is collected

## Technology Stack

* React 19
* TypeScript
* Vite
* TanStack Start
* TanStack Router
* Tailwind CSS 4
* Radix UI
* html5-qrcode
* jsQR
* qrcode

## Getting Started

### Prerequisites

* Node.js 20+
* npm

### Installation

```bash
git clone https://github.com/jodiangelo/qrforge-scanner.git
cd qrforge-scanner
npm install
```

### Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run start
```

## Project Structure

```text
src/
├── components/
├── routes/
├── lib/
├── hooks/
├── styles/
└── router.tsx
```

## Linting

```bash
npm run lint
```

## Formatting

```bash
npx prettier --write .
```

## Performance Notes

QRForge Scanner uses modern code-splitting and optimized QR processing libraries to provide fast scanning and generation across desktop and mobile devices.

## Roadmap

* SVG export support
* QR logo embedding
* Batch QR generation
* Wi-Fi QR templates
* Contact (vCard) QR codes
* Dynamic QR codes
* PWA support

## Contributing

Contributions, bug reports, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

MIT License