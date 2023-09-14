#!/bin/bash -x

[ ! -d '/tmp/cache' ] && mkdir -p /tmp/cache

npm run start --loglevel verbose --cache /tmp/cache