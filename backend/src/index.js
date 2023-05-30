const express = require('express');

const app = express();
app.use(express.json());

const userController = require('./controllers/userController');
const onibusController = require("./controllers/onibusController");
const paradaController = require("./controllers/paradaController");

app.get('/users', userController.getUsuarios)
// app.get('/users/:name', userController.getUsuarioByName)
// app.post("/users/", userController.adicionarUsuario);
// app.put("/users/:name", userController.atualizarUsuario);
// app.delete("/users/:name", userController.removerUsuario);

app.post("/login/", userController.login);

app.get("/onibus", onibusController.getOnibus);
app.get("/onibus/:name", onibusController.getOnibusByName);
app.post("/onibus/", onibusController.adicionarOnibus);
app.put("/onibus/:numero", onibusController.atualizarOnibus);
app.delete("/onibus/:numero", onibusController.removerOnibus);

// app.get('/paradas', paradaService.getUsuarios)
// app.get('/paradas/:id', paradaService.getUsuarios)


app.listen(3001, () => {
  console.log('Server started on port 3001');
});