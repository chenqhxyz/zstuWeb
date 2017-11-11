#!/usr/bin/env bash
set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  npm run build all

  #build doc
  npm run build-doc

  # version
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push && git push --tags
  npm publish
fi
