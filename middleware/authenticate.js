var {secret} = require('../config/config.json');
const db = require('../models');
const expressJwt = require('express-jwt')

module.exports = (role) => {
    if(typeof role == 'string'){
        role = [role];
    }
    return [
        expressJwt({secret,  algorithms: ['HS256']}),
        (req, res, next) => {
            
            // if(role.length && !role.includes(req.user.role)){
            //         return res.status(401).json({message: "Unauthorized111"});
            // }
            
                db.users.findOne({
                    where: {
                        id: req.user.id,
                        email: req.user.email
                    }
                }).then((user)=>{
                    if(user){
                        //console.log(req.user)
                        next();
                    } else {
                        return res.status(401).json({message: "Unauthorized222"})
                    }
                })
            
        }
    ]
}