'use strict';

const peopleSchema = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;

    const { name, age } = JSON.parse(event.body);

    let toUpdate = await peopleSchema.update(
      { id: id },
      { name: name, age: age }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(toUpdate),
    };
  } catch (err) {
    return {
      statusCode: 500,
      err: err.message,
    };
  }
};
