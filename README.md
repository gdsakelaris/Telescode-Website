# Telescode LLC Website

A modern, high-performance website for Telescode LLC built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for rapid styling and consistent design
- **Framer Motion** for smooth animations and micro-interactions
- **Dark/Light Mode** with system preference detection
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper meta tags and structured data
- **Performance First** with Core Web Vitals optimization
- **Accessibility** compliant with WCAG 2.1 guidelines

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: MDX support
- **Theme**: next-themes
- **Deployment**: Vercel (recommended)

## 🏗️ Project Structure

```
Telescode Website/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   └── theme-provider.tsx # Theme provider
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── content/              # MDX content (future)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/telescode/website.git
   cd website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`. The primary colors can be customized:

```javascript
primary: {
  50: '#eff6ff',
  500: '#3b82f6',
  600: '#2563eb',
  // ... etc
}
```

### Typography

Fonts are configured in `app/globals.css` and `tailwind.config.js`:

- **Sans**: Inter (Google Fonts)
- **Mono**: JetBrains Mono (Google Fonts)

### Animations

Custom animations are defined in `tailwind.config.js` and can be used throughout the application:

- `animate-fade-in`
- `animate-slide-up`
- `animate-scale-in`
- `animate-gradient`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔧 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Google Fonts with `display=swap`
- **Bundle Splitting**: Automatic code splitting
- **Lazy Loading**: Components and images loaded on demand
- **Caching**: Optimized caching strategies

## 📊 SEO Features

- **Metadata API**: Dynamic meta tags with Next.js 14
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives

## 🎯 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** (if any)
3. **Deploy** - automatic deployments on push

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Telescode LLC**

- Website: [https://telescode.com](https://telescode.com)
- Email: hello@telescode.com
- GitHub: [@telescode](https://github.com/telescode)

---

Built with ❤️ by Telescode LLC
