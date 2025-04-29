# Script para limpar recursos do Docker

# Exibe o espaço em disco ocupado
docker system df

# Remove todos os containers parados
docker container prune -f

# Remove todas as imagens não utilizadas
docker image prune -a -f

# Remove volumes não utilizados
docker volume prune -f

# Remove redes não utilizadas
docker network prune -f

# Remove todo cache de construção
docker builder prune -a -f

# Exibe o espaço em disco recuperado
Write-Host "Limpeza do Docker concluída!" -ForegroundColor Green
docker system df