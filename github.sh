#!/bin/bash

echo "Introduce el mensaje de commit:"
read variable1

git add .
git commit -m "feat: $variable1"

cd ..

git add .
git commit -m "feat: $variable1"
