# EAS Builder Docker

This project provides Docker images for local building of Expo/React Native applications using EAS CLI.

## Docker Hub

Docker images are available on Docker Hub:

- [expo-builder:50](https://hub.docker.com/repository/docker/saulotarsobc/eas-builder-sc/tags?name=50)
- [expo-builder:51](https://hub.docker.com/repository/docker/saulotarsobc/eas-builder-sc/tags?name=51)
- [expo-builder:52](https://hub.docker.com/repository/docker/saulotarsobc/eas-builder-sc/tags?name=52)

## Help

- [Build servers infrastructure](https://docs.expo.dev/build-reference/infrastructure/)
- [Run EAS Build locally with local flag](https://docs.expo.dev/build-reference/local-builds/)
- [Programmatic access](https://docs.expo.dev/accounts/programmatic-access/)

## Features

- Support for multiple Expo versions (50, 51, 52)
- Complete Android build environment
- EAS CLI integration
- Optimized for local builds

## Prerequisites

- Docker installed
- Node.js (for local builds)
- Configured `eas.env` file

## Configuration

### 1. EAS Authentication

- Go to [expo.dev](https://expo.dev/settings/access-tokens) and create a token
- Add the token to the `eas.env` file:
