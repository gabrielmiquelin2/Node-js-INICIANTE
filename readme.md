<h2>Módulos do NodeJS:</h3>

- Podemos criar nossos próprios módulos e importálos.

- O NodeJS vem com módulos pré instalados (path,fs,http)

- Para importar um módulos, utlizamos o CommonJS:

```Javascript
const path = require("paht");
const meuArquivo = require ("./meuArquivo.js");
```

<h3>NPM</4>

- Tamém temos o <strong>NPM</strong>,com ele podemos instalar módulos de terceiros, esses módulos fica armazenados na pasta "node_modules".

- Um arquivo chamado "package.json" lista todos os módulos que instalamos pelo <strong>NPM</strong>

```Javascript
npm init //Cria o package.json
npm install express // Instala o pacote express localmente 
npm -g install express // Instala o pacote globalmente
```
<hr>
<h1>Como executar os códigos</h1>

Para rodar as portas HTTPS e EXPRESS, vai preceisar descomentar os seguindes códigos do arquivo `index.js`

```Javascript
// require("./modules/server-http/http")
// require ("./modules/server-express/express")
```
Descomente esses códigos e execute no terminal o seguinte comando: 
```
npm run start:dev
```
para visualizar no navegador:
```
http://localhost:8080/home   //http
http://localhost:8080/users //express
```