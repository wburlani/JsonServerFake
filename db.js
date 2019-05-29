const firstJson = require('./json1.json');
const secondJson = require('./json2.json');
const thirdJson = require('./json3.json');
const fourthJson = require('./json4.json');

module.exports = () => {	
  return {
    firstJson,
    secondJson,
    thirdJson, 
    fourthJson
  };
};