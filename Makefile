build:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml build"

up:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml up -d"

down:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml down"

restart:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml restart"

ps:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml ps"

composer-install:
	cd src; \
	mkdir -p vendor; \
	rm -rf vendor/*
	make cmd TARGET:="docker compose -f docker-compose-dev.yml exec app bash -c 'composer install'"

setup:
	@make build
	@make up
	@make composer-install
	@make npm-install

exec-app:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml exec app bash"

npm-install:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml exec app bash -c 'npm install'"

npm-dev:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml exec app bash -c 'npm run dev'"

ide-helper-generate:
	make cmd TARGET:="docker compose -f docker-compose-dev.yml exec app bash -c 'php artisan ide-helper:generate'"

cmd:
ifeq ($(OS),Windows_NT)
	winpty $(TARGET)
else
	$(TARGET)
endif