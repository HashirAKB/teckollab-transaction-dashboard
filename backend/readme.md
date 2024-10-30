# Transactions API Backend

A robust REST API built with Express.js and TypeScript for managing transaction data. This project uses Prisma ORM with Azure SQL Database for data persistence.

## Features

- 🔍 Search transactions by product or customer
- 📄 Paginated transaction listing
- 🎯 Type-safe database operations with Prisma
- 🔒 Secure environment configuration
- 🛡️ Built-in security with Helmet middleware
- 📱 CORS enabled for cross-origin requests

## Prerequisites

- Node.js (v14 or higher)
- Azure SQL Database instance
- npm or yarn package manager

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: Azure SQL
- **Development**: ts-node-dev

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

1. Copy the environment example file:
```bash
cp .env.example .env
```

2. Update the `.env` file with your configurations:
```env
PORT=3000
DATABASE_URL="sqlserver://<your-server>.database.windows.net:1433;database=<your-db-name>;user=<your-username>;password=<your-password>;encrypt=true"
SHADOW_DATABASE_URL="sqlserver://<your-server>.database.windows.net:1433;database=<your-db-name>-shadow;user=<your-username>;password=<your-password>;encrypt=true"
```

### 4. Database Setup

1. Generate Prisma Client:
```bash
npm run prisma:generate
```

2. Run migrations:
```bash
npm run prisma:migrate
```

3. Seed the database:
```bash
npx prisma db seed
```

### 5. Start the Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm run build
npm start
```

## API Endpoints

### Get Transactions
```http
GET /api/transactions
```

#### Query Parameters

| Parameter | Type     | Description                                     |
|-----------|----------|-------------------------------------------------|
| page      | number   | Page number (default: 1)                        |
| limit     | number   | Items per page (default: 10, max: 100)         |
| search    | string   | Search term for product or customer name       |

#### Response Format

```json
{
  "data": [
    {
      "id": number,
      "trackingId": string,
      "product": string,
      "productImage": string,
      "customer": string,
      "date": string,
      "amount": number,
      "paymentMode": string,
      "status": string
    }
  ],
  "total": number,
  "page": number,
  "totalPages": number
}
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── transaction.controller.ts
│   ├── middlewares/
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   ├── routes/
│   │   └── transaction.routes.ts
│   ├── services/
│   │   └── transaction.service.ts
│   ├── types/
│   │   └── transaction.types.ts
│   └── index.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── package.json
├── tsconfig.json
└── .env.example
```

## Available Scripts

- `npm run dev`: Start development server with hot reload
- `npm run build`: Build the project for production
- `npm start`: Start production server
- `npm run prisma:generate`: Generate Prisma Client
- `npm run prisma:migrate`: Run database migrations

## Error Handling

The API uses a centralized error handling mechanism with custom `AppError` class. All errors are returned in the following format:

```json
{
  "status": "error",
  "message": "Error description"
}
```