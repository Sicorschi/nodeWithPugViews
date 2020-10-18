const User = require('./User');
const Post = require('./Post');
const Roles = require('./Roles');

Roles.hasOne(User);
User.hasMany(Post);