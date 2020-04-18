'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
		Add altering commands here.
		Return a promise to correctly handle asynchronicity.

		Example:
		return queryInterface.createTable('users', { id: Sequelize.INTEGER });
		*/

		return queryInterface.addColumn('ratings', 'burgerId', {
			type: Sequelize.INTEGER,
			references: {
				model: 'burgers',
				key: 'id'
			},
			onUpdate: 'CASCADE',
			onDelete: 'SET NULL',
		});
	},

	down: (queryInterface, Sequelize) => {
		/*
		Add reverting commands here.
		Return a promise to correctly handle asynchronicity.

		Example:
		return queryInterface.dropTable('users');
		*/

		return queryInterface.removeColumn('ratings','burgerId');
	}
};
