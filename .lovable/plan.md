

# Sanctuary Point Healthcare Website

A warm, welcoming healthcare website for Sanctuary Point General Practice & Quality Care Hospital, featuring a calming blue-green color palette with dark mode support.

---

## 🏥 Pages & Features

### 1. Home Page
- **Hero Section**: Beautiful welcome banner with hospital name, tagline about compassionate care, and CTA buttons ("Book Appointment" → HotDoc redirect, "Our Services")
- **About Preview**: Brief hospital overview highlighting patient-centered approach
- **Highlights Cards**: Experienced Doctors, Quality Care, Patient-Centered icons with descriptions
- **Quick Links**: Easy access to services and team

### 2. Our Team Page
- **Doctor & Staff Grid**: 8-10 team members displayed in attractive cards
- **Card Details**: Profile photo, name, and designation
- **Interactive**: Click any card to view full profile

### 3. Team Member Details Page (`/team/:id`)
- **Full Profile View**: Large photo, name, role/specialization
- **Professional Info**: Years of experience, education credentials
- **Bio Section**: Personal background and approach to care
- **Back Navigation**: Easy return to team grid

### 4. Services Page
- **Service Cards**: 8-10 services (General Consultation, Preventive Care, Diagnostics, Chronic Care Management, Women's Health, Men's Health, Pediatrics, Mental Health, etc.)
- **Card Layout**: Healthcare icons, service title, short description
- **Book CTA**: Each service links to HotDoc booking

### 5. Resources Page
- **Health Tips Section**: Practical wellness advice cards
- **Articles Section**: Educational health content
- **Patient Guides**: Preparation guides, what to expect, etc.
- **Card-based Layout**: Easy browsing with categories

### 6. Contact Us Page
- **Contact Form**: Name, Email, Phone, Message fields with validation
- **Hospital Details**: Sanctuary Point NSW address, phone, email
- **Google Maps**: Embedded map showing location
- **Book Appointment CTA**: Additional HotDoc redirect option

---

## 🎨 Design & Experience

- **Color Palette**: Soft teals, calming blues, warm accents on white backgrounds
- **Typography**: Clean, readable healthcare-appropriate fonts
- **Dark Mode**: Full theme toggle with comfortable dark variant
- **Warm & Welcoming**: Rounded corners, friendly illustrations, soft shadows
- **Fully Responsive**: Optimized for mobile, tablet, and desktop

---

## 🧩 Reusable Components

- **Navbar**: Logo, navigation links, dark mode toggle, "Book Now" button
- **Footer**: Contact info, quick links, social placeholders, copyright
- **Service Cards**: Reusable for services and resources
- **Team Cards**: Consistent staff display
- **Section Headers**: Unified page title styling

---

## 📁 Project Structure

```
src/
├── components/     # Navbar, Footer, Cards, etc.
├── pages/          # All 6 page components
├── data/           # Mock JSON for team, services, resources
└── lib/            # Utilities and helpers
```

---

## 🔗 Navigation & Routing

- Clean URL structure with React Router
- Dynamic team member pages (`/team/:id`)
- Smooth navigation between all sections
- "Book Appointment" buttons redirect to HotDoc (placeholder URL ready for your link)

