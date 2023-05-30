const userService = require('../services/userService');

async function getUsuarios(req, res) {
    try {
        const usuarios = await userService.getUsuarios();
        console.log('====================================');
        console.log(usuarios);
        console.log('====================================');
        res.json(usuarios);
        
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }

}

async function getUsuarioByName(req, res) {
    const name = req.params.name;
    const usuario = await userService.getUsuarioByName(name);
    res.json(usuario);
}

async function adicionarUsuario(req, res) {
    const usuario = req.body;
    const novoUsuario = await userService.adicionarUsuario(usuario);
    res.json(novoUsuario);
}

async function atualizarUsuario(req, res) {
    const name = req.params.name;
    const usuario = req.body;
    const usuarioAtualizado = await userService.atualizarUsuario(name, usuario);
    res.json(usuarioAtualizado);
}

async function removerUsuario(req, res) {
    const name = req.params.name;
    const deleted = await userService.removerUsuario(name);
    res.json(deleted);
}

async function login(req, res) {
    const { email, senha } = req.body;
    const login = await userService.login(email, senha);
    if(login.length > 0)   
        res.send(true);
        
    res.send(false)
}

module.exports = {
    getUsuarios,
    getUsuarioByName,
    adicionarUsuario,
    atualizarUsuario,
    removerUsuario,
    login
}
