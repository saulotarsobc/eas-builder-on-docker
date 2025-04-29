# EAS Builder Docker

Este projeto fornece imagens Docker para build local de aplicativos Expo/React Native usando EAS CLI.

## Docker Hub

As imagens Docker estão disponíveis no Docker Hub:

- [expo-builder:50](https://hub.docker.com/repository/docker/saulotarsobc/eas-builder-sc/tags?name=50)
- [expo-builder:51](https://hub.docker.com/repository/docker/saulotarsobc/eas-builder-sc/tags?name=51)
- [expo-builder:52](https://hub.docker.com/repository/docker/saulotarsobc/eas-builder-sc/tags?name=52)

## Help

- [Infraestrutura dos servidores de build](https://docs.expo.dev/build-reference/infrastructure/)
- [Execute o EAS Build localmente com o sinalizador local](https://docs.expo.dev/build-reference/local-builds/)
- [Acesso programático](https://docs.expo.dev/accounts/programmatic-access/)

## Características

- Suporte para múltiplas versões do Expo (50, 51, 52)
- Ambiente completo para build Android
- Integração com EAS CLI
- Otimizado para builds locais

## Pré-requisitos

- Docker instalado
- Node.js (para builds locais)
- Arquivo `eas.env` configurado

## Configuração

### 1. Autenticação EAS

- Acesse o [expo.dev](https://expo.dev/settings/access-tokens) e crie um token
- Adicione o token no arquivo `eas.env`:

```conf
EXPO_TOKEN="seu-token-aqui"
PROFILE="seu-perfil-aqui"
```

### EXPO_TOKEN
- O token é necessário para acessar o EAS.
- O token deve ser criado no [expo.dev](https://expo.dev/settings/access-tokens)

### PROFILE
- O profile é necessário para acessar o EAS.
- Deve ser configura no `app.json` do projeto.

### 2. Preparação do Ambiente

Execute o script PowerShell para baixar as ferramentas necessárias:

```powershell
.\download_tools.ps1
```

## Uso

### Build das Imagens

Para diferentes versões do Expo:

```bash
# Expo 50
npm run build:50

# Expo 51
npm run build:51

# Expo 52
npm run build:52
```

### Publicação das Imagens

```bash
# Expo 50
npm run publish:50

# Expo 51
npm run publish:51

# Expo 52
npm run publish:52
```

### Recursos do Container

O container está configurado com os seguintes limites:

- CPUs: 8 cores
- Memória: 16GB

## Estrutura do Projeto

- `Dockerfile.expo-*`: Arquivos para build de diferentes versões
- `src/main.ts`: Script principal de execução
- `tools/`: Diretório com ferramentas necessárias para build
- `docker-compose-eas-builer-sc.yml`: Configuração do ambiente de execução

## Ferramentas Incluídas

- Node.js 18.18.0
- Java OpenJDK 17
- Android Command Line Tools
- Android NDK r26d
- EAS CLI (última versão)
- Outras ferramentas: npm, yarn, pnpm, sharp-cli, node-gyp, bun

## Variáveis de Ambiente

- `JAVA_HOME`: Localização do Java
- `ANDROID_HOME`: Localização do Android SDK
- `ANDROID_SDK_ROOT`: Root do Android SDK
- `ANDROID_NDK_HOME`: Localização do Android NDK
- `EAS_LOCAL_BUILD_*`: Configurações para builds locais
