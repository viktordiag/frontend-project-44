install: # установить зависимости 
	npm ci
brain-games: # запустить игру
	node bin/brain-games.js
publish: 
	npm publish --dry-run
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
brain-progression:
	node bin/brain-progression.js
lint:
	npx eslint --no-eslintrc --config .eslintrc.yml .

