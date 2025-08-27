FROM nginx:alpine


COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expõe a porta 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
