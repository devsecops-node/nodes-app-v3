#!/bin/bash

# Solicitar la entrada de la variable1
echo "Introduce el mensaje de commit:"
read variable1

# Añadir los cambios al índice y hacer commit en el directorio actual
git add .
git commit -m "feat: $variable1"

# Cambiar al directorio padre
cd ..

# Añadir los cambios al índice y hacer commit en el directorio padre
git add .
git commit -m "feat: $variable1"
