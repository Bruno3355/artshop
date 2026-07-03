FROM node:22-alpine
WORKDIR /app

RUN apk add --no-cache netcat-openbsd

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --ignore-scripts
RUN npx prisma@7.8.0 generate

ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD ["sh", "-c", "\
    until nc -z db 3306; do sleep 2; done && \
    npx prisma generate && \
    npx prisma migrate deploy && \
    npx prisma db seed && \
    npm run dev \
    "]