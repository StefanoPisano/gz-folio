#!/usr/bin/env sh
git remote add main-repo git@github.com:StefanoPisano/gz-folio.git

git fetch main-repo
git checkout main-repo/main -- public/index.html
git checkout main-repo/main -- *.vue
git checkout main-repo/main -- src/router/routes.js
git checkout main-repo/main -- jsconfig.json
git checkout main-repo/main -- babel.config.js
git checkout main-repo/main -- CHANGELOG.md