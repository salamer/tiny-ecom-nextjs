#!/bin/bash -x

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache && ln -s /tmp/cache ./.next/cache

node .next/standalone/server.js 