# Stage 1: Build React client
FROM node:18-alpine AS client-builder
WORKDIR /app/client
RUN corepack enable pnpm && corepack install -g pnpm@latest

# Copy client package files and install dependencies
COPY client/package*.json client/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy client source and build
COPY client ./
RUN pnpm run build

# Stage 2: Build Express GraphQL server
FROM node:18-alpine AS server-builder
WORKDIR /app/server
RUN corepack enable pnpm && corepack install -g pnpm@latest

# Copy server package files and install dependencies
COPY server/package*.json server/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy server source
COPY server ./

# Copy client build output to server's public directory
COPY --from=client-builder /app/client/dist ./dist/public

# Build server
RUN pnpm run build

# Stage 3: Production environment
FROM node:18-alpine
WORKDIR /app
RUN corepack enable pnpm && corepack install -g pnpm@latest

# Copy server package files and install production dependencies
COPY server/package*.json server/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy built server and client files
COPY --from=server-builder /app/server/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]