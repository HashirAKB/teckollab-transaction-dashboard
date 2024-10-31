# Transaction Dashboard Frontend

A modern, responsive React application for managing and viewing transaction data, built with TypeScript and Vite. Features a sophisticated data table with sorting, searching, and pagination capabilities.

![Version](https://img.shields.io/badge/version-0.0.0-blue)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.6.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- 📱 Responsive data table with horizontal scrolling
- 🌓 Dark/Light theme support with system preference detection
- 🔍 Real-time search with debouncing
- ↕️ Sortable columns with visual indicators
- 📄 Pagination with dynamic page range
- 🎨 Consistent theming using Tailwind CSS
- ⚡ Fast development with Vite
- 💅 Sleek UI components from shadcn/ui

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** React Hooks
- **Icons:** Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`.

## 🏗️ Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── features/
│   │   │   └── transactions/
│   │   │       ├── TransactionDashboard.tsx
│   │   │       ├── TransactionDataTable.tsx
│   │   │       ├── TransactionTableHeader.tsx
│   │   │       └── TransactionColumns.tsx
│   │   ├── theme/
│   │   │   ├── theme-provider.tsx
│   │   │   └── theme-toggle.tsx
│   │   └── ui/
│   │       ├── PaginationControls.tsx
│   │       ├── TableSkeleton.tsx
│   │       └── [shadcn components]
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useTransactions.ts
│   ├── lib/
│   │   ├── api.ts
│   │   └── constants.ts
│   ├── styles/
│   │   └── theme.ts
│   ├── types/
│   │   └── transaction.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 📖 Usage

### Theme Configuration

The application supports both light and dark modes. The theme system uses:
- Local storage for persistence
- System preference detection
- Manual toggle through the UI

### Data Table Features

1. **Search:**
   - Real-time search with 500ms debounce
   - Searches across product and customer fields

2. **Pagination:**
   - Configurable entries per page (10, 25, 50, 100)
   - Dynamic page range calculation
   - Smooth scroll to top on page change

3. **Sorting:**
   - Click column headers to sort
   - Supports ascending and descending order

### API Integration

The application connects to a REST API with the following endpoint:
```typescript
GET /transactions
Params: {
  page: number;
  limit: number;
  search?: string;
}
```


## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | http://localhost:3000/api |
