# Step 1: Build the Vue application
FROM node:18-slim AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm run docs

# Step 2: Serve with Nginx
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist-docs /usr/share/nginx/html

# Copy your template to the templates directory
COPY default.conf.template /etc/nginx/templates/default.conf.template

# IMPORTANT: Do NOT override CMD or ENTRYPOINT. 
# The base image's default entrypoint will handle the substitution.
EXPOSE 8080

