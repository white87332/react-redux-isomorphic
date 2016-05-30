import express from 'express';
import main from './src/middleware/main';
import routes from './src/middleware/routes';
import isomorphic from './src/middleware/isomorphic';

const app = express();

main(app);
isomorphic(app);
routes(app);

process.on('uncaughtException', evt =>
{
	console.log( 'uncaughtException: ', evt );
});

app.listen(3000, function()
{
	console.log('Listening on port 3000');
});
