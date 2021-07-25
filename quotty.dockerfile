FROM nginx:stable-alpine
LABEL maintainer=yevhen_horbunkov@epam.com
RUN rm -rf /etc/nginx/conf.d /etc/nginx/nginx.conf
ADD ./src/server/config/nginx/ /etc/nginx/
ADD ./src/server/config/certificate/quotty.cert.pem /etc/ssl/certs/
ADD ./src/server/config/certificate/quotty.key.pem /etc/ssl/private/
ADD ./dist/ /var/www/html/
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]