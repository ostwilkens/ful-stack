FROM    node
RUN     apt-get -y update

# libglu required for cwebp
RUN     apt-get -y install libglu1 

RUN     mkdir -p /srv/app
WORKDIR /srv/app
RUN     yarn
RUN     yarn global add @gridsome/cli

# COPY    ./theme /var/www/html/wp-content/themes/akademi
# VOLUME  /var/www/html/wp-content/uploads
# RUN     chown -R www-data:www-data /var/www

EXPOSE	8080