import express from 'express';
import bodyParser from 'body-parser';

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import schemas from './schemas';

const PORT = 3000;
const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: mergeSchemas({schemas:schemas})  }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql'  })); // if you want GraphiQL enabled

app.listen(PORT);
console.log('Listening on port ' + PORT)
