#!/usr/bin/env sh

git checkout main-repo/main -- public/index.html
git checkout main-repo/main -- *.vue
git checkout main-repo/main -- src/router/routes.js
git checkout main-repo/main -- jsconfig.json
git checkout main-repo/main -- babel.config.js
git checkout main-repo/main -- CHANGELOG.md


git commit ./*.vue jsconfig.json src/router/routes.js public/index.html babel.config.js CHANGELOG.md -m "build(gz-folio): upgrade of gz-folio framework"
