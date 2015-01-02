#!/bin/sh
r.js -o app.build.js
cd dist
mv public/vendor/requirejs/require.js require.js
mv public/vendor/bootstrap/dist/fonts fonts

rm -rf public/vendor .git .idea build.txt app.build.js app-build.sh server-start.sh bower-install.sh package.json bower.json .bowerrc README.md LICENSE

mkdir public/vendor
mkdir public/vendor/requirejs
mkdir public/vendor/bootstrap
mkdir public/vendor/bootstrap/dist

mv require.js public/vendor/requirejs/require.js
mv fonts public/vendor/bootstrap/dist
mv css/main.css main.css && rm -rf css/* && mv main.css css/main.css