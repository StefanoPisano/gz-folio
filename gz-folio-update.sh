#!/usr/bin/env sh
git remote add main-repo git@github.com:StefanoPisano/gz-folio.git

git fetch main-repo
git checkout main-repo/main -- gz-f-update.sh

sh ./gz-f-update.sh

npm run install