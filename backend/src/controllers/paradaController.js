const paradaService = require('../services/paradaService');

async function getParada(req, res) {
  const paradas = await paradaService.getParada();
  res.json(paradas);
}

async function getParadaByName(req, res) {
  const name = req.params.name;
  const parada = await paradaService.getParadaByName(name);
  res.json(parada);
}

async function adicionarParada(req, res) {
    const parada = req.body;
    const novoParada = await paradaService.adicionarParada(parada);
    res.json(novoParada);
}

async function atualizarParada(req, res) {
  const name = req.params.name;
  const parada = req.body;
  const paradaAtualizado = await paradaService.atualizarParada(name, parada);
  res.json(paradaAtualizado);
}

async function removerParada(req, res) {
  const name = req.params.name;
  const deleted = await paradaService.removerParada(name);
  res.json(deleted);
}

module.exports = {
  getParada,
  getParadaByName,
  adicionarParada,
  atualizarParada,
  removerParada
}
