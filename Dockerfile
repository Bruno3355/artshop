FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV DATABASE_URL="mysql://root@db:3306/artshop_db"
RUN npx prisma generate

EXPOSE 3000

CMD ["sh", "-c", "npm run build && npm run setup && npm start"]