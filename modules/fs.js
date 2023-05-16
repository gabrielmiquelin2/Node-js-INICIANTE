const { error } = require("console");
const fs = require ("fs");
const  path = require ("path")

//CRIAR PASTA
fs.mkdir(path.join(__dirname,"/teste"), (error) =>{
    if(error){
      return console.log("ERRO: ", error)
    }
    console.log("PASTA CRIADA COM SUCESSO")
})

//CRIAR UM ARQUIVO DENTRO DA PASTA TESTE
fs.writeFile(path.join(__dirname, "teste", "teste.txt"), "Hello Node!!!",(error) =>{
    if (error){
      return console.log("ERRO: ", error)
    }

    console.log("ARQUIVO CRIADO COM SUCESSO!")
})

//ADCIONAR MAIS COISA DENTRO DO AQRUIVO CRIADO
fs.appendFile(path.join(__dirname, "/teste","teste.txt"),"Hello WORD!",(error) =>{
  if (error){
    return console.log("ERRO: ", error)
  }
  console.log("ARQUIVO MODIFICADO COM SUCESSO")
})

//LER ARQUIVOS
fs.readFile(path.join(__dirname, "/teste","teste.txt"),"utf-8",(error, data) =>{
  if (error){
    return console.log("ERRO: ", error)
  }
  console.log(data)
})