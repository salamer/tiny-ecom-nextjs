#!/bin/sh -x

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache

node .next/standalone/server.js 