FROM node:10.15.3-alpine

WORKDIR /app/

ARG binary=theia

COPY output/$binary /app/theia
RUN mkdir -p /app/browser-app/src-gen/
COPY browser-app/src-gen /app/browser-app/src-gen/

CMD ["/app/theia", "/workspace"]
