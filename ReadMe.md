# Transaction Dashboard

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/react-18.3.1-blue)
![Node](https://img.shields.io/badge/node-18.x-green)
![TypeScript](https://img.shields.io/badge/typescript-5.6.2-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A full-stack web application for managing and visualizing transaction data. Features a modern React frontend with a responsive data table and a robust Node.js backend powered by Express and Prisma ORM.

## 🌟 Features

### Frontend
- 📱 Responsive data table with horizontal scrolling
- 🔍 Real-time search with debouncing
- 📊 Sorting and filtering capabilities
- 📄 Pagination with configurable page sizes
- 🌓 Dark/Light theme support
- 💅 Modern UI components from shadcn/ui

### Backend
- 🎯 Type-safe database operations with Prisma ORM
- 🔒 Secure environment configuration
- 🛡️ Built-in security with Helmet middleware
- 🚀 Efficient database queries
- 📱 CORS-enabled for cross-origin requests

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18.3 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **State Management:** React Hooks
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **ORM:** Prisma
- **Database:** Azure SQL
- **Security:** Helmet

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn package manager
- Azure SQL Database instance

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd transaction-dashboard
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Environment Setup:

Backend (.env):
```env
PORT=3000
DATABASE_URL="sqlserver://<your-server>.database.windows.net:1433;database=<your-db-name>;user=<your-username>;password=<your-password>;encrypt=true"
SHADOW_DATABASE_URL="sqlserver://<your-server>.database.windows.net:1433;database=<your-db-name>-shadow;user=<your-username>;password=<your-password>;encrypt=true"
```

Frontend (.env):
```env
VITE_API_URL=http://localhost:3000/api
```

4. Database Setup:
```bash
cd backend
npm run prisma:generate
npm run prisma:migrate
npx prisma db seed
```

5. Start the application:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

The application will be available at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## 📁 Project Structure

```
transaction-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── features/
│   │   │   ├── theme/
│   │   │   └── ui/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── types/
│   │   └── App.tsx
│   ├── public/
│   └── index.html
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   └── prisma/
└── README.md
```

## 🔌 API Endpoints

### Get Transactions
```http
GET /api/transactions
```

#### Query Parameters

| Parameter | Type   | Description                               |
|-----------|--------|-------------------------------------------|
| page      | number | Page number (default: 1)                  |
| limit     | number | Items per page (default: 10)   |
| search    | string | Search term for product or customer name |

#### Response Format
```json
{
  "data": [
    {
      "id": "number",
      "trackingId": "string",
      "product": "string",
      "productImage": "string",
      "customer": "string",
      "date": "string",
      "amount": "number",
      "paymentMode": "string",
      "status": "string"
    }
  ],
  "total": "number",
  "page": "number",
  "totalPages": "number"
}
```

## 🔧 Available Scripts

### Backend

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run prisma:generate`: Generate Prisma Client
- `npm run prisma:migrate`: Run database migrations

### Frontend

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## 🚀 Deployment

### Backend Deployment

1. Build the project:
```bash
cd backend
npm run build
```

2. Set up environment variables on your hosting platform
3. Run database migrations:
```bash
npm run prisma:migrate
```

4. Start the server:
```bash
npm start
```

### Frontend Deployment

1. Build the project:
```bash
cd frontend
npm run build
```

2. Deploy the contents of the `dist` directory to your hosting service

## 🔒 Security Features

- CORS protection
- Helmet security headers
- Environment variable protection
- Input validation
- SQL injection prevention through Prisma