# ANTIQUA Art Shop

A modern, scalable, and powerful e-commerce platform designed specifically for the commerce of art-related products, such as canvas, vases, jewelry, and more...

## Tech Stack

### Frontend & Framework

- **Next.js (App Router)**
- **React Server Components**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**

### State & Validation

- **Zustand**
- **Zod**

### Backend & Data

- **Prisma ORM**
- **MySQL**

### Infrastructure

- **Docker**

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) (Docker Compose included)
- No local Node.js or MySQL installation required — everything runs inside containers.

### Running the project

1. **Clone the repository**

```bash
git clone https://github.com/Bruno3355/artshop.git
cd artshop
```

2. **Start the application**

```bash
docker compose up --build
```

This command will:

- Build the app image and install dependencies
- Start a MySQL 8.0 container (`artshop_db`)
- Wait for the database to become healthy
- Apply all pending Prisma migrations (`prisma migrate deploy`)
- **Automatically seed the database** with sample data (products, categories, contact messages, and orders)
- Start the Next.js dev server

3. **Access the application**

   The application can be accessed at [http://localhost:3000](http://localhost:3000) in your browser.

### Stopping and resetting

```bash
# Stop containers
docker compose down

# Stop containers and reset
docker compose down -v
```

## Database Seeding

The database is seeded automatically on every container startup via `prisma/seed.ts` and `app` startup command.
No manual seeding or migration step is required.

If needed, reseeding can be done manually with the following command:

```bash
docker compose exec app npx prisma db seed
```

## Verifying Order Persistence

1. **Place an order** at [http://localhost:3000](http://localhost:3000) (add a product to the cart and complete checkout).

2. **Inspect the database**, using Prisma Studio:

```bash
docker compose exec app npx prisma studio --browser none
```

3. **Alternatively, inspect via the MySQL CLI:**

```bash
docker compose exec db mysql -u root artshop_db -e 'SELECT * FROM `{table}` ORDER BY createdAt DESC LIMIT 5;'
```

Replace `{table}` with the table name.

## Authors

- [@Bruno3355](https://www.github.com/Bruno3355)
