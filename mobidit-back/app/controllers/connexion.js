const { prisma } = require('../../services/prismaClient');
const passport = require('passport');
const LocalStrategy = require('passport-local')
var crypto = require('crypto');

//permet de verifier si le nom et mdp sont correct.
const verify = async( req, res ) =>{
  const { body:{
    username,
    password
  } } = req;
};

const login = async(req, res) =>{
  const { body:{
    username,
    password
  } } = req;
  try{
  const dbPassword = await prisma.users.findUnique({
    where: {
      username
    },
    select: {
      password: true,
    },
  });
  return res.json({
    succes: true,
    data: username,
    code: 200,
  });
} catch (error) {
  console.log(error);
  let message;
  if(error == "ReferenceError: user is not defined"){
    message = "nom d'utilisateur incorrect."
  };
  return res.json({
    succes: false,
    message,
    code: 404,
  });
};
}


module.exports = {
  verify,
  login
};