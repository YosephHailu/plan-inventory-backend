FROM php:8.1-fpm-alpine

RUN apk add --no-cache \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql sockets zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-scripts --no-autoloader

COPY . .
RUN composer dump-autoload --optimize
