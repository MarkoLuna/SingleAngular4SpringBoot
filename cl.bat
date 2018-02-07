echo "I am not doing anything: Windows"

cd src/main/angular/ui/
npm install
ng build --prod --env=prod
# xcopy /s/y/e build/ ../../resources/static/home/

# /s/e - recursive copy, including copying empty directories.
# /h - copy system and hidden files.
# /y - don't prompt before overwriting existing files.