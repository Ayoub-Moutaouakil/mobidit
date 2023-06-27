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
  const test  = crypto.randomBytes(16).toString('hex');
//  const test = crypto.pbkdf2(password, env("SALT"), 310000, 32, 'sha256', ((err, hashedPassword)=>{
//     // console.log(hashedPassword);
//     // console.log(dbPassword)
//     return hashedPassword;
//     // if (err) { return cb(err); }
//     // if (!crypto.timingSafeEqual(dbPassword, hashedPassword)) {
//     //   return { message: 'Incorrect username or password.' };
//     // };
//     // return res.json({
//     //   succes: true,
//     //   data: username,
//     //   code: 200,
//     // });
//   }));

  console.log(test);
  
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