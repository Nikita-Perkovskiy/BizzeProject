FROM node:20 as builder

ARG REACT_APP_GOOGLE_MAPS_API_KEY

COPY    .  .

RUN     npm install

RUN     npm run build

FROM nginx:alpine

COPY --from=builder     /build      /usr/share/nginx/html
COPY ./nginx.conf       /etc/nginx/conf.d/default.conf

EXPOSE 80
