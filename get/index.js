'use strict';

const peopleSchema = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    let data;
    if (id) {
      const results = await peopleSchema.query('id').eq(id).exec();
      data = results[0];
    } else {
      data = await peopleSchema.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};
