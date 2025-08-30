# Nextra Tailwind shadcn/ui Starter 🚀

A modern documentation starter built with [Nextra](https://nextra.site/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/),
**[Aceternity UI](https://ui.aceternity.com/)**, and **[Iconify](https://iconify.design/)**. Perfect for creating
beautiful, responsive documentation sites with excellent developer experience and stunning animations.

## ✨ Features

- **📚 Nextra** - Static site generator built on Next.js for documentation
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid styling
- **🧩 shadcn/ui** - Beautiful, accessible React components
- **✨ Aceternity UI** - Stunning animated components with Framer Motion
- **🎯 Iconify** - Access to 200,000+ icons from 150+ icon sets
- **🎨 Lucide React** - Beautiful, consistent icon set with React components
- **🌙 Dark Mode** - Built-in dark/light theme switching
- **📱 Responsive** - Mobile-first design that works on all devices
- **⚡ Fast** - Optimized for performance with Next.js
- **🔍 Search** - Built-in search functionality
- **📖 MDX Support** - Write content in Markdown with React components
- **🎯 TypeScript** - Full TypeScript support out of the box

## 🚀 Quick Start

1. **Use this template**
   ```bash
   npx create-next-app@latest my-docs --example https://github.com/thehimel/nextra-tailwind-shadcn-starter
   ```

2. **Or clone the repository**
   ```bash
   git clone https://github.com/thehimel/nextra-tailwind-shadcn-starter.git
   cd nextra-tailwind-shadcn-starter
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Adding New Components

#### shadcn/ui Components
This starter includes shadcn/ui components. To add more components:

```bash
npx shadcn-ui@latest add [component-name]
```

#### Aceternity UI Components

Aceternity UI provides beautiful animated components built with Framer Motion and Tailwind CSS. Copy components directly
from [ui.aceternity.com](https://ui.aceternity.com/components) and paste them into your `components/ui/` directory.

Popular Aceternity UI components include:
- **Moving Cards** - Infinite scrolling card animations
- **Lamp Effect** - Stunning lamp lighting effects for headers
- **Meteors** - Animated background beam effects
- **Moving Border** - Animated borders for buttons and containers
- **Spotlight** - Dynamic spotlight effects
- **Timeline** - Animated timeline components with scroll effects

#### Lucide React Icons

Lucide React provides a beautiful, consistent set of SVG icons designed specifically for React. These icons are used
throughout shadcn/ui components and offer excellent performance:

```tsx
import { Home, User, Settings, Heart } from 'lucide-react';

// Basic usage
<Home className="w-6 h-6" />
<User size={24} />
<Settings color="blue" />

// With styling
<Heart className="w-4 h-4 text-red-500 fill-current" />
```

**Benefits of Lucide React:**

- Designed specifically for React with TypeScript support
- Consistent design language across all icons
- Tree-shakeable - only bundle icons you use
- Highly customizable with className, size, and color props
- Used by shadcn/ui components for consistency

#### Iconify Icons

Iconify provides access to over 200,000 icons from 150+ icon sets with one unified syntax. Use icons in your components:

```tsx
import { Icon } from '@iconify/react';

// Using icon names (loads on demand)
<Icon icon="mdi:home" />
<Icon icon="heroicons:academic-cap" />
<Icon icon="logos:react" />

// Or import specific icons for better performance
import homeIcon from '@iconify-icons/mdi/home';
<Icon icon={homeIcon} />
```

**Benefits of Iconify:**

- Loads icons on demand - no need to bundle icons
- Renders pixel-perfect SVG instead of icon fonts
- One syntax for 200,000+ icons from popular sets like Material Design, Heroicons, Font Awesome, and more

### Styling

- **Global styles**: Edit `styles/globals.css`
- **Tailwind config**: Modify `tailwind.config.js`
- **Theme colors**: Update the CSS variables in `styles/globals.css`

### Theme Configuration

Edit `theme.config.tsx` to customize:
- Site title and description
- Navigation
- Footer
- Logo
- Social links

## 📝 Writing Content

Create `.mdx` files in the `pages/` directory. You can use:

- **Markdown syntax** for content
- **React components** inline
- **shadcn/ui components** for enhanced UI
- **Aceternity UI components** for stunning animations
- **Iconify icons** for beautiful iconography

Example:

```markdown
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Icon } from '@iconify/react'
import { Home, Heart, Info } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'

# My Page Title

This is regular markdown content with different icon options:
- Iconify icon: <Icon icon="mdi:heart" className="inline" />
- Lucide icon: <Heart className="inline w-4 h-4 text-red-500" />

<Alert>
  <Info className="w-4 h-4" />
  <AlertDescription>
    This alert uses a Lucide React icon and shadcn/ui components!
  </AlertDescription>
</Alert>

<Spotlight className="top-40 left-0 md:left-60 md:-top-20">
  <div className="p-8">
    <h2>Stunning Spotlight Effect</h2>
    <p>This content is highlighted with Aceternity UI's Spotlight component!</p>
    <Home className="w-8 h-8 mt-4" />
  </div>
</Spotlight>
```

## 🎭 Component Libraries Usage

### shadcn/ui
A set of beautifully-designed, accessible components perfect for building consistent UI elements.

```bash
# Add specific components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
```

### Lucide React
Beautiful, consistent SVG icons designed specifically for React applications:

```tsx
import { Home, User, Settings, Mail, Calendar } from 'lucide-react';

// Standard usage
<Home className="w-6 h-6" />
<User size={24} color="currentColor" />

// In components
<Button>
  <Mail className="w-4 h-4 mr-2" />
  Send Email
</Button>

// Custom styling
<Calendar className="w-5 h-5 text-blue-600 hover:text-blue-800" />
```

### Aceternity UI
Beautiful Tailwind CSS and Framer Motion components built with Next.js and TypeScript. Copy-paste animated components for modern interfaces:

- **Background Effects**: Meteors, Aurora, Grid patterns
- **Interactive Elements**: Moving borders, Direction-aware hover
- **Layout Components**: Bento grids, Sticky scroll reveal
- **Navigation**: Floating navbar, Sidebar
- **Typography**: Text reveal, Typewriter effect

### Iconify
Access to all popular icon sets with unified syntax:

```tsx
// Material Design Icons
<Icon icon="mdi:account" />

// Heroicons
<Icon icon="heroicons:home" />

// Brand icons
<Icon icon="logos:github-icon" />

// Custom styling
<Icon icon="mdi:heart" style={{ color: 'red', fontSize: '24px' }} />
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out/` folder to Netlify

### GitHub Pages

1. Configure `next.config.js` for static export
2. Run `npm run build && npm run export`
3. Deploy the `out/` folder

## 🛠️ Built With

- [Nextra](https://nextra.site/) - Documentation framework
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Aceternity UI](https://ui.aceternity.com/) - Animated components
- [Iconify](https://iconify.design/) - Icon framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Additional icons

## 📚 Resources

- [Nextra Documentation](https://nextra.site/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Aceternity UI Components](https://ui.aceternity.com/components)
- [Iconify Icon Sets](https://iconify.design/icon-sets/)
- [Iconify for React Documentation](https://iconify.design/docs/icon-components/react/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nextra](https://nextra.site/) team for the amazing documentation framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework
- [Aceternity UI](https://ui.aceternity.com/) for the stunning animated components
- [Iconify](https://iconify.design/) for the comprehensive icon solution

---

**⭐ If you found this starter helpful, please give it a star!**

Made with ❤️ by [thehimel](https://github.com/thehimel)
"# docs.err" 
