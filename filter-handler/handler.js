'use strict';

const filterService = require('./service/filterService')

module.exports.filter = async (event) => {
  console.log('Evento do SNS recebido com sucesso: ', JSON.stringify(event))
  await filterService.thumbnail(event)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  return { message: 'Filtro gerado com sucesso!', event };
};
