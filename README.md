# Sahitya Rangamati - সাহিত্য রাঙামাটি

A beautiful, responsive website for the Sahitya Rangamati literary magazine, featuring an Indian Bengali aesthetic with bilingual support (English and Bengali).

## 🌟 Features

- **Bilingual Support**: Full English and Bengali language support with seamless switching
- **Responsive Design**: Beautiful design that works on all devices
- **Indian Bengali Aesthetic**: Rangamati-themed color palette (reddish soil colors)
- **Modern UI**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: Proper semantic HTML and keyboard navigation

## 📱 Sections

### 1. Hero Section
- Beautiful landing page with mandala background patterns
- Animated content with smooth transitions
- Call-to-action buttons

### 2. Publications Section
- Search functionality for publications
- Year-based filtering (1995-2011, 2024-2025)
- Sort by newest/oldest
- Publication cards with cover images

### 3. Gallery Section
- Photo gallery of ceremonies and events
- Category filtering (Publication Ceremony, Literary Event, Cultural Event)
- Lightbox modal for image viewing
- Navigation between images

### 4. Contact Section
- Contact form with validation
- Contact information (phone, email, Facebook)
- Office hours and address
- Social media links

## 🎨 Design Features

- **Color Palette**: Rangamati-inspired colors (reddish soil theme)
  - Primary: #8B4513 (Saddle Brown)
  - Secondary: #D2691E (Chocolate)
  - Accent: #DAA520 (Goldenrod)
  - Background: #FDF5E6 (Cream)

- **Typography**: 
  - English: Inter font
  - Bengali: Noto Sans Bengali font

- **Background Patterns**: Mandala-inspired radial gradients
- **Indian Elements**: Traditional border patterns and decorative elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sahitya-rangamati
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
sahitya-rangamati/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with language switcher
│   │   ├── Hero.tsx            # Landing page hero section
│   │   ├── Publications.tsx    # Publications with search and filters
│   │   ├── Gallery.tsx         # Photo gallery with modal
│   │   └── Contact.tsx         # Contact form and information
│   ├── globals.css             # Global styles and CSS variables
│   ├── layout.tsx              # Root layout with fonts
│   └── page.tsx                # Main page component
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── package.json                # Dependencies and scripts
```

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Noto Sans Bengali)

## 📧 Contact Information

- **Email**: sahityarangamati@gmail.com
- **Phone**: +880 1234-567890
- **Facebook**: Sahitya Rangamati
- **Address**: Rangamati, Chittagong Hill Tracts, Bangladesh

## 🎯 Key Features Implementation

### Language Switching
- Seamless toggle between English and Bengali
- All content dynamically updates
- Proper font loading for both languages

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions

### Search and Filter
- Real-time search in publications
- Year range filtering
- Sort functionality

### Image Gallery
- Category-based filtering
- Lightbox modal with navigation
- Responsive grid layout

## 🔧 Customization

### Colors
Update the color palette in `app/globals.css`:
```css
:root {
  --rangamati-red: #8B4513;
  --rangamati-orange: #D2691E;
  --rangamati-brown: #A0522D;
  --rangamati-cream: #F5F5DC;
  --rangamati-gold: #DAA520;
  --rangamati-dark: #2F1B14;
  --rangamati-light: #FDF5E6;
}
```

### Content
- Update publication data in `Publications.tsx`
- Modify gallery images in `Gallery.tsx`
- Change contact information in `Contact.tsx`

## 📄 License

This project is created for Sahitya Rangamati magazine. All rights reserved.

## 🤝 Contributing

For any suggestions or improvements, please contact the development team.

---

**Sahitya Rangamati** - Celebrating the rich heritage of Bengali literature and culture.
**সাহিত্য রাঙামাটি** - বাংলা সাহিত্য এবং সংস্কৃতির সমৃদ্ধ ঐতিহ্য উদযাপন।
