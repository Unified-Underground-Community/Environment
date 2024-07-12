# Include Environment Variables
include .env

project_start:
	docker compose up -d

project_stop:
	docker compose down

client_deploy:
	docker exec -it -u root ${PROJECT_NAME}-client /bin/bash

server_deploy:
	docker exec -it -u root ${PROJECT_NAME}-server /bin/bash

api_deploy:
	docker exec -it -u root ${PROJECT_NAME}-api /bin/bash

api_prisma_status:
	docker exec -it -u root ${PROJECT_NAME}-api bunx prisma migrate status

api_prisma_reset:
	docker exec -it -u root ${PROJECT_NAME}-api bunx prisma migrate reset

api_prisma_pull:
	docker exec -it -u root ${PROJECT_NAME}-api bunx prisma db pull

api_prisma_push:
	docker exec -it -u root ${PROJECT_NAME}-api bunx prisma db push

api_prisma_generate:
	docker exec -it -u root ${PROJECT_NAME}-api bunx prisma generate

api_prisma_migrate:
	docker exec -it -u root ${PROJECT_NAME}-api bunx prisma migrate dev