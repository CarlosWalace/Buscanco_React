const onibusService = require("../services/onibusService");

async function getOnibus(req, res) {
    const usuarios = await onibusService.getOnibus();
    res.json(usuarios);
}

async function getOnibusByName(req, res) {
    const name = req.params.name;
    const onibus = await onibusService.getOnibusByName(name);
    res.json(onibus);
}

async function adicionarOnibus(req, res) {
    const onibus = req.body;
    const novoOnibus = await onibusService.adicionarOnibus(onibus);
    res.json(novoOnibus);
}

async function atualizarOnibus(req, res) {
    const numero = req.params.numero;
    const onibus = req.body;
    const usuarioAtualizado = await onibusService.atualizarOnibus(numero, onibus);
    res.json(usuarioAtualizado);
}

async function removerOnibus(req, res) {
    const numero = req.params.numero;
    const deleted = await onibusService.removerOnibus(numero);
    res.json(deleted);
}

module.exports = {
    getOnibus,
    getOnibusByName,
    adicionarOnibus,
    atualizarOnibus,
    removerOnibus,
};
