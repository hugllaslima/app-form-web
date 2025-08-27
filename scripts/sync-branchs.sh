#!/bin/bash

echo "🔄 Sincronizando branches..."

git checkout main
git pull origin main
echo "✅ Main atualizada"

git checkout stage  
git pull origin stage
echo "✅ Stage atualizada"

echo "🚀 Pronto para trabalhar!"
echo "✅ Todas as branches foram sincronizadas com sucesso!"
git branch -v 