# node-nginx-redis-docker

A simple opinionated `docker-compose` setup for running a NodeJS application behind an `nginx` proxy, with a Redis database thrown into the mix for good measure

## Pre-requisites

* `node`
* `docker` & `docker-compose`

## Installation

To start in build (foreground) mode

```bash
docker-compose up --build
```

To start in detached (background) mode

```bash
docker-compose up -d
```
