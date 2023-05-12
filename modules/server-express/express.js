const expess = require ("express")

const app = expess();

app.get("/home", (req,res) => {
  res.contentType("application/html")
   res.status(200).send("<h1>HELLO WORD</h1>");
})


app.get("/users", (req,res) =>{
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
 res.status(200).json(users);
});

//Inicializar o servidor
const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));

