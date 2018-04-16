#!/usr/bin/env bash

echo "I am not doing anything"

cd src/main/angular/ui/
npm install
ng build --prod --env=prod