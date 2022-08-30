
FROM nginx:1.15.0-alpine

#RUN apk update && \
#    apk upgrade  && \
#    apk add bash  

RUN rm /etc/nginx/conf.d/default.conf && \
    mkdir /var/www/html -p 

COPY nginx.conf /etc/nginx/conf.d
COPY ./images/ /var/www/html/images/
