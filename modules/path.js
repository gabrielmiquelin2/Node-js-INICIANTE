const path = require ("path") 

//Mostra o nome do arquivo Atual
console.log(path.basename(__filename));

//Mostra o nome do Diretório autal (C:\Users\gabri\OneDrive\GABRIEL\Cursos\YT\FelipeRocha-dicasparadevs\node-js-iniciante\modules)
console.log(path.dirname(__filename));

// //Mostra a extensão do arquivo
console.log(path.extname(__filename));

// //Cria um objeto Path
console.log(path.parse(__filename));

// //Junta caminhos de  arquivos
console.log(path.join(__dirname, "teste", "teste.html"));