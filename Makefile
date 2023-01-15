install: # установить зависимости 
	npm ci
brain-games: # запустить игру
	node bin/brain-games.js
publish: 
	npm publish --dry-run
lint:
	npx eslint
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
