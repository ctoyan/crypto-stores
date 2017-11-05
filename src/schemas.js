import fs from 'fs';
import { makeExecutableSchema } from 'graphql-tools';

let schemas = [];

const featuresDir = __dirname + '/features';
const features = fs.readdirSync(featuresDir);
features.forEach((feature) => {
  const schema = require(featuresDir + '/' + feature +'/schema').default;
  schemas.push(makeExecutableSchema(schema));
});

export default schemas;
