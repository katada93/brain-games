install: 
	npm install

brain-even:
	node src/bin/brain-even.js

brain-calc:
	node src/bin/brain-even.js

brain-gcd:
	node src/bin/brain-gcd.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
