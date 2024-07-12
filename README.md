# 🌟 Dockerized Nuxt + ExpressJS 🐋🌟

[![License](https://img.shields.io/badge/license-GNU-blue.svg)](https://github.com/Azshurith/Dockerized-Laravel-Environment-Artisan/blob/main/LICENSE)

This repository contains a Docker environment for Nuxt.js applications utilizing Express.js for streamlined development and deployment.

## 🛠️ Makefile Commands

```makefile
project_start        Starts the Project
project_stop         Stops the Project
server_deploy        Deploys to the Express.js server
prisma_pull          Pull the database schema using Prisma
prisma_generate      Generate Prisma client
```

## 📝 Environment Variables (.env)

Ensure to set up your environment variables in the .env file.

```dotenv
# Docker Project
PROJECT_NAME=bluehero
PROJECT_VERSION=1.0

# MariaDB Configurations
MARIADB_CONNECTION=mysql
MARIADB_HOST=host.docker.internal
MARIADB_PORT=3306
MARIADB_DATABASE=bluehero
MARIADB_USERNAME=bluehero
MARIADB_PASSWORD=bluehero
MARIADB_DOCKERFILE=.docker/MariaDB
MARIADB_URL=${MARIADB_CONNECTION}://${MARIADB_USERNAME}:${MARIADB_PASSWORD}@${MARIADB_HOST}:${MARIADB_PORT}/${MARIADB_DATABASE}

# PhpMyAdmin Configurations
PHPMYADMIN_DOCKERFILE=.docker/PhpMyAdmin
PHPMYADMIN_PORT=9090
PHPMYADMIN_PORT_MAP=80
PHPMYADMIN_PMA_HOST=MariaDB

# Client Configurations
CLIENT_DOCKERFILE=.docker/Bun
CLIENT_PORT=9091
CLIENT_DIRECTORY=./Client
CLIENT_WORK_DIRECTORY=/var/client

# Server Configurations
SERVER_DOCKERFILE=.docker/Bun
SERVER_PORT=9092
SERVER_DIRECTORY=./Server
SERVER_WORK_DIRECTORY=/var/server

# Api Configurations
API_DOCKERFILE=.docker/Bun
API_PORT=9093
API_DIRECTORY=./Api
API_WORK_DIRECTORY=/var/api
```
## 🚀 Getting Started

### Prerequisites 🛠️

- Docker: Install Docker on your system if you haven't already. You can download it [here](https://www.docker.com/get-started).

### Installation 📦

  **Setting up Laravel from your Git Repository**
  1. Set up your environment variables in the .env file.
  2. Run `make project_start` to start the Docker environment.
  3. Access your PhpMyAdmin at http://localhost:9090/.
  4. Access your Nuxt Application at http://localhost:9091/.
  5. Access your ExpressJS API at http://localhost:9092/.

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).

## License 📝

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

Special thanks to the open-source community for their valuable contributions and inspiration.

## Contact 📧

For questions or feedback, please feel free to reach out:

- GitHub: [Devitrax](https://github.com/Azshurith)

<p align="center">
  Made with ❤️ by Devitrax
</p>
