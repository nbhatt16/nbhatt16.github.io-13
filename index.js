const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

const apiRouter = require('./routes/apiRoutes');
const db = require('./models');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const hbs = exphbs.create();

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/api', apiRouter);
app.get('/', async (req, res) => {
	const burgers = await db.Burger.findAll({
		raw: true
	});

	res.render('home', {burgers});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
