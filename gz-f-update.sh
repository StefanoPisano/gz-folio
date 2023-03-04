#!/usr/bin/env sh

git checkout main-repo/main -- package.json
git checkout main-repo/main -- *.vue
git checkout main-repo/main -- src/router/routes.js
git checkout main-repo/main -- src/assets/img/gz-private/*
git checkout main-repo/main -- jsconfig.json
git checkout main-repo/main -- babel.config.js
git checkout main-repo/main -- src/themes/default/theme.json
git checkout main-repo/main -- src/themes/light/theme.json
git checkout main-repo/main -- CHANGELOG.md


git commit gz-f-update.sh package.json ./*.vue jsconfig.json src/router/routes.js src/assets/img/gz-private/* public/index.html babel.config.js src/themes/light/theme.json src/themes/default/theme.json CHANGELOG.md -m "build(gz-folio): upgrade of gz-folio framework"


npm install