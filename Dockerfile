# ── Stage 1: Build Stage (no-op for static files) ─────────────────────────────
# Using nginx:alpine as the base image to serve static files efficiently.
FROM nginx:alpine

# Remove the default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy our AgentPulse static files into the nginx serve directory
COPY . /usr/share/nginx/html/

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Cloud Run requires the container to listen on port 8080
EXPOSE 8080

# Start nginx in the foreground (required for Docker)
CMD ["nginx", "-g", "daemon off;"]
