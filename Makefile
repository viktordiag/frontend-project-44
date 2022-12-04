install: # установить зависимости 
	npm ci
brain-games: # запустить игру
	node bin/brain-games.js
publish: 
	npm publish --dry-run


