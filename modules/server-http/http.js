const http = require ("http")//Inportando o próprio http

//Definindo a porta que o servidor vai estar disponivel
const port = 8080;

//Criando o servidor
const server = http.createServer((req,res) =>{
   if (req.url === "/home"){
    res.writeHead(200,{ "Content-Type": "text/html" })//200 = requisição "OKAY"
       res.end("<h1>HOME PAGE</h1>");
   }

   if(req.url === "/users"){
     const users = [
        {
          name: "Gabriel Miquelin",
          email: "gabriel@miquelin.com"
        },
        {
          name: "Rei Delas",
          email: "rei@delas.com"
        },
     ]

     res.writeHead(200,{"Content-Type": "application/json"});
     res.end(JSON.stringify(users))
   }
})

server.listen(port,() => console.log(`Rodando http na porta ${port}!`))