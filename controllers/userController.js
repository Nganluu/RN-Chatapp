const db = require('../models');
const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(10);

var jwt = require('jsonwebtoken');
var config = require('../config/config.json');
var sequelize = require('sequelize')

const login = (req, res) => {
    db.users.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if(!user){
            res.json({
                success: false, 
                message: "Email isn't existed"
            })
        } 
       else { 
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid){
            res.json({
                success: false, 
                message: "Invalid password"
            })
        }
        var payload = {
            id: user.id,
            email: user.email
        }
        var token = jwt.sign(payload, config.secret, {
            expiresIn: 18400
        });
        res.json({
            success: true, 
            token: token, 
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
                avatar: user.avatar
            }
        })
        }
    })
}

const register = (req, res) => {
    console.log("text register")
    db.users.findOne({
        where: {
            email: req.body.email
        }
    }).then(user=>{
        if(user){
            res.json({
                success: false, 
                message: "Email has been existed already"
            })
        } else {
            db.users.create({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt),
                name: req.body.name,
                avatar: req.body.avatar                
            }).then(account=>{
                res.json({
                    success: true, 
                    message: "Create account successfully",
                    data: account
                })
            })
        }
    })
}

const getUser = (req, res) => {
    db.users.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        if(!user) {
            res.json({
                success: false,
                message: "Invalid user"
            })
        } else {
            res.json({
                success: true,
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar
                }
            })
        }
    })
}

const getChatList = (req, res) => {
    var listuser = []
    var finalResult = []
    db.chat_boxes.findAll({
        where: {
            user_id: req.user.id
        }
    }).then(
        async result =>  {
            for(i =0; i < result.length; i++){
                //console.log("aaaaaaaaaaaaaaaaa"+ result[i].group_id )
             await db.chat_boxes.findAll({
                    where: {
                        group_id: result[i].group_id,
                        user_id: {
                            [sequelize.Op.not]: req.user.id
                        }
                    }
                }).then(resu=>{
                    listuser.push(resu[0].dataValues.user_id)
                })
            }
            //console.log(listuser)  
            for(i = 0; i<listuser.length; i++){
            await  db.users.findOne({
                    where: {
                        id: listuser[i]
                    }
                }).then(result => {
                    console.log(result.dataValues)
                    finalResult.push(result.dataValues)
                }) 
            }
            res.json({
                success: true,
                data: finalResult
            })
    }
    )
}



var user = {};
user.login = login;
user.register = register;
user.getUser = getUser;
user.getChatList = getChatList;
module.exports = user;