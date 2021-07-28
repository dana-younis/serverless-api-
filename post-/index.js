const peopleSchema = require('./people.schema.js');
const uuid = require('uuid').v4;

module.exports = exports.handler = async(event) => {

    try {
        const { name, age } = JSON.parse(event.body);
        const id = uuid();

        let obj = {
            id: id,
            name: name,
            age: age
        }

        let newSchema = new peopleSchema(obj);
        let hh = await newSchema.save();

        return {
            statusCode: 201,
            body: JSON.stringify(hh)
        }
    } catch (err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }

}