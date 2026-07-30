## ⚠️ Correction Note

> **Important:** I kindly request the evaluation team to sign in to their Vercel account before opening or checking the deployment link. Otherwise, the Vercel login page may appear and prevent access to the deployed project.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# ShipNow – Logistics Management Dashboard

ShipNow is a responsive logistics and shipment management frontend application built with **Next.js, TypeScript, and Tailwind CSS**.

The project is based on a high-fidelity Figma design and focuses on accurately reproducing the provided user interface while maintaining a clean, reusable, and scalable frontend architecture.

This project does not use a backend, database, or external API. All dashboard content is currently powered by local mock data.

---

## Live Demo

> Deployment link will be added after the project is deployed.

**Live URL:** `Coming soon`

---

## Project Goals

The main goals of this project are:

- Reproduce the provided Figma design as accurately as possible
- Build reusable and maintainable React components
- Create a shared application layout
- Use TypeScript for improved type safety
- Keep dashboard data separate from UI components
- Implement responsive layouts for desktop, tablet, and mobile devices
- Add interactive dashboard functionality using local mock data
- Avoid pre-styled component libraries to preserve the original Figma design

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Frontend framework |
| TypeScript | Type-safe application development |
| Tailwind CSS | Component styling and responsive layouts |
| Recharts | Dashboard charts and data visualization |
| Lucide React | Temporary icons during development |
| Next.js Image | Optimized rendering of local image assets |
| Local Mock Data | Static dashboard content |

---

## Current Development Status

The project is being developed feature by feature based on the provided Figma screens.

### Completed

| Feature | Status |
|---|---|
| Next.js project setup | ✅ Complete |
| TypeScript configuration | ✅ Complete |
| Tailwind CSS setup | ✅ Complete |
| Dashboard application structure | ✅ Complete |
| Shared dashboard sidebar | ✅ Complete |
| Dashboard top header | ✅ Complete |
| Dashboard summary cards | ✅ Complete |
| Shipment Statistics chart | ✅ Complete |
| Profit Summary chart | ✅ Complete |
| Shipment Type donut chart | ✅ Complete |
| Product Categories section | ✅ Complete |
| Live Tracking section | ✅ Complete |
| Shipment Alerts section | ✅ Complete |
| Recent Shipments table | ✅ Complete |
| Recent Activity timeline | ✅ Complete |
| Shared dashboard footer | ✅ Complete |
| Local dashboard mock data | ✅ Complete |
| Reusable TypeScript interfaces | ✅ Complete |

### In Progress

| Feature | Status |
|---|---|
| Desktop layout refinement | 🟡 In progress |
| Exact Figma spacing and visual adjustments | 🟡 In progress |
| Replacing temporary icons with exported Figma assets | 🟡 In progress |
| Responsive tablet layout | ⏳ Not started |
| Responsive mobile layout | ⏳ Not started |

### Not Started

| Screen / Feature | Status |
|---|---|
| Login page | ⏳ Not started |
| Shipments – Table View | ⏳ Not started |
| Shipments – Grid View | ⏳ Not started |
| Shipments view switcher | ⏳ Not started |
| Shipment filtering | ⏳ Not started |
| Shipment search | ⏳ Not started |
| Table sorting | ⏳ Not started |
| Row selection | ⏳ Not started |
| Pagination | ⏳ Not started |
| Create New Shipment page | ⏳ Not started |
| Shipment form validation | ⏳ Not started |
| Invoices & Billing page | ⏳ Not started |
| Invoice master-detail interaction | ⏳ Not started |
| Warehouse page | ⏳ Not started |
| Final responsive optimization | ⏳ Not started |
| Production deployment | ⏳ Not started |

---

## Dashboard Features Implemented

### 1. Shared Dashboard Layout

The dashboard uses a reusable application shell that contains:

- Navigation sidebar
- Top dashboard header
- Main page content area
- Shared footer

The shared layout is intended to be reused across all authenticated pages, including:

- Dashboard
- Shipments
- Create New Shipment
- Invoices & Billing
- Warehouse

This approach avoids repeating the same sidebar, header, and footer code on every page.

---

### 2. Dashboard Sidebar

The sidebar includes:

- ShipNow branding
- User profile section
- Main navigation menu
- Secondary navigation menu
- Active navigation state
- Temporary icons that will be replaced with the original Figma assets

The sidebar is designed according to the provided desktop Figma layout.

---

### 3. Dashboard Header

The dashboard header currently includes:

- User greeting
- Main heading
- Search input
- Add New Shipping action button

The layout follows the provided desktop wireframe and will be refined further during the final design review.

---

### 4. Summary Cards

The dashboard contains reusable summary cards for:

- Active Shipments
- Delivery Performance
- Revenue

Each card supports:

- Title
- Main value
- Additional information
- Percentage change
- Optional supporting text
- Icon area

The cards are generated from local mock data rather than repeating hard-coded markup.

---

### 5. Shipment Statistics

The Shipment Statistics section includes a chart built from local data.

The chart is designed to display shipment activity across multiple months and follows the visual structure provided in the Figma design.

---

### 6. Profit Summary

The Profit Summary section contains a chart for visualizing revenue and cost information.

The chart is rendered using a charting library and local mock data rather than using a static chart image.

---

### 7. Shipment Type

The Shipment Type section includes:

- Donut chart
- Total shipment count
- Road Freight information
- Ocean Freight information
- Air Freight information
- Rail Freight information
- Shipment percentages
- Shipment counts

The chart data is defined locally and can be updated without modifying the component structure.

---

### 8. Product Categories

The Product Categories section includes:

- Total product count
- Category distribution bar
- Product category list
- Product counts
- Percentage values
- Category color indicators

The categories are generated from reusable local data.

---

### 9. Live Tracking

The Live Tracking section includes:

- Static map area
- Shipment search input
- Map zoom controls
- Shipment information card
- Courier information
- Shipment status
- Progress indicator
- Departure and destination information
- Estimated shipment timing

A static map image is used because a live map integration is not required for this assignment.

---

### 10. Shipment Alerts

The Shipment Alerts section includes:

- Total number of detected delays
- Summary alert cards
- Customs delays
- Address issues
- Weather-related issues
- Shipment alert list
- Alert icons
- Shipment references
- Alert dates

The alert data is maintained locally.

---

### 11. Recent Shipments

The Recent Shipments section includes:

- Shipment search field
- Table header
- Shipment ID
- Company information
- Carrier information
- Route information
- Shipping date
- Shipment status

The table is currently populated using local mock data.

Advanced functionality such as sorting, filtering, row selection, and pagination will be added during the Shipments feature implementation.

---

### 12. Recent Activity

The Recent Activity section includes:

- Reusable activity timeline items
- Activity icons
- Timeline connectors
- User and order references
- Activity descriptions
- Time information

The timeline is generated from a local activity data array.

---

### 13. Shared Footer

The shared footer contains:

- Copyright information
- Privacy Policy link
- Terms and Conditions link
- Contact link
- Social media icons

The footer is implemented as a reusable component and is intended to appear across all authenticated pages.

The temporary social icons are being replaced with the original assets exported from Figma.

---

## Project Structure

The project follows a component-based structure.

```text
src/
├── app/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx
│   │
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   │
│   │   ├── shipments/
│   │   │   └── page.tsx
│   │   │
│   │   ├── invoices/
│   │   │   └── page.tsx
│   │   │
│   │   └── warehouse/
│   │       └── page.tsx
│   │
│   └── globals.css
│
├── components/
│   ├── dashboard/
│   │   ├── ActivityIcon.tsx
│   │   ├── DashboardOverview.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── RecentActivity.tsx
│   │   ├── RecentActivityItem.tsx
│   │   ├── RecentShipmentsTable.tsx
│   │   ├── ShipmentAlerts.tsx
│   │   ├── ShipmentStatistics.tsx
│   │   ├── ShipmentType.tsx
│   │   └── SummaryCard.tsx
│   │
│   └── layout/
│       ├── DashboardFooter.tsx
│       ├── DashboardHeader.tsx
│       └── Sidebar.tsx
│
├── data/
│   └── dashboard.ts
│
└── types/
    └── dashboard.ts

public/
├── icons/
│   └── social/
│       ├── facebook.svg
│       ├── instagram.svg
│       ├── linkedin.svg
│       ├── x.svg
│       └── youtube.svg
│
└── images/


