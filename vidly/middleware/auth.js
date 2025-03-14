const config= require('config')
const jwt = require('jsonwebtoken')
module.exports= function (req, res, next) {
  // Implement authentication logic here
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied. No token provided.');
  // Verify the token
  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid token.');
  }
  
};

