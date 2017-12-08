main.css: main.sass
	sass --no-cache main.sass main.css
	rm main.css.map

movies.js: movies.json
	./convert.js