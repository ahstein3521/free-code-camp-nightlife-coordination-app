const User = require('../../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// require('../../secret'); 
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.jwt
};


module.exports = new JwtStrategy(jwtOptions, function(payload, done) {

  User.findById(payload.sub, function(err, user) {
    if (error) { return done(error, false); }

    if (user) {
     return done(null, user);
    } 
    return done(null, false);
    
  });
});