const express = require('express');

const db = require('../models');

const router = express.Router();

router.get('/burgers', async (_, res) => {
	const data = await db.Burger.findAll();

	res.json(data);
});

router.post('/burger/new', async (req, res) => {
	const { name } = req.body;

	await db.Burger.create({
		name,
		isDevoured: false
	});

	res.status(200).end();
});

router.put('/burger/:id/devour', async (req, res) => {
	const { id } = req.params;

	await db.Burger.update({
		isDevoured: true
	}, {
		where: {
			id
		}
	});

	res.status(200).end();
});

module.exports = router;
