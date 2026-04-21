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
# Copy the build output from the build-stage to Nginx's public folder
COPY --from=build-stage /app/dist-docs /usr/share/nginx/html
# Cloud Run requires the container to listen on the port defined by the PORT environment variable (default 8080)
# We overwrite the default Nginx config to listen on the correct port
RUN sed -i 's/listen\(.*\)80;/listen ${PORT};/' /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

