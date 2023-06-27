const { prisma } = require('../../services/prismaClient');

const index = async (req, res) => {
	try {
		const users = await prisma.users.findMany();
		res.json({
			succes: true,
			data: users,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: false, data: { error }, code: 400 });
	};
};

const show = async (req, res) => {
	const {
		params: { username },
	} = req;
	try {
		const user = await prisma.users.findUnique({
			where: {
				username: username,
			},
		});
		return res.json({
			succes: true,
			data: user,
			code: 200,
		});
	} catch (error) {
		return res.json({
			succes: false,
			message: 'Utilisateur not found',
			code: 404,
		});
	};
};

const create = async (req, res) => {
	try {
		const { body } = req;
		console.log(body);
		const createUser = await prisma.users.create({
			data: {
				...body,
			},
		});
		return res.json({
			succes: true,
			data: createUser,
			code: 200,
		});
	} catch (error) {
		console.log(error);
		return res.json({ succes: false, data: { error } });
	};
};

const update = async (req, res) => {
	const {
		params: { username },
	} = req;
	const { body } = req;
	try {
		const updateUser = await prisma.users.update({
			where: {
				username: username,
			},
			data: {
				...body,
			},
		});
		return res.json({
			succes: true,
			data: updateUser,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: false, data: { error } });
	}
};

const supprimer = async (req, res) => {
	const {
		params: { username },
	} = req;
	const { body } = req;
	try{
		const deleteUser = prisma.users.delete({
			where: {
				username: username,
			},
		});
		return res.json({
			succes: true,
			data: deleteUser,
			code: 200,
		});
	}catch (error) {
		return res.json({ succes: false, data: { error } });
	};
};

module.exports = {
	index, //show all user
	show, //show user
	create, //create user
	update, //update user
	supprimer //delete user
}