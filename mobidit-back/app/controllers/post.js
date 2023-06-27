const { prisma } = require('../../services/prismaClient');

const index = async (req, res) => {
	try {
		const posts = await prisma.posts.findMany();
		res.json({
			succes: true,
			data: posts,
			code: 200,
		});
	} catch (error) {
		return res.json({ succes: false, data: { error }, code: 400 });
	};
};

const show = async (req, res) =>{
  const {
		params: { id },
	} = req;
  try{
    const post = await prisma.posts.findUnique({
      where: {
        id
      }
    });
    return res.json({
			succes: true,
			data: post,
			code: 200,
		});
  } catch (error){
		return res.json({ succes: false, data: { error }, code: 400 });
  }
};

const create = async (req, res) =>{
  const { body } = req;
  try{
    const createPost = await prisma.posts.create({
      data: {
        ...body,
      },
    });
    return res.json({
      succes: true,
      data: createPost,
      code: 200
    });
  } catch(error){
    console.log(error);
    return res.json({ succes: false, error, code: 400});
  }
};

const update = async (req, res) =>{
  const {
		params: { id },
	} = req;
	const { body } = req;
  try{
    const updatePost = await prisma.posts.update({
      where:{
        id,
      },
      data: {
				...body,
			},
    });
    return res.json({
      succes: true,
      data: updatePost,
      code: 200
    });
  } catch(error){
    return res.json({ succes: false, error, code: 400});
  }
};

const supprimer = async(req, res) => {
  const {
		params: { id },
	} = req;
	try{
		const deletePost = prisma.users.delete({
			where: {
				id,
			},
		});
		return res.json({
			succes: true,
			data: deletePost,
			code: 200,
		});
	}catch (error) {
		return res.json({ succes: false, data: { error } });
	};
}

module.exports = {
  index,
  show,
  create,
  update,
  supprimer
};