const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db/model')

class UserController{
    static async FindAllTweet(req, res, next){
        const {search, sort} = req.query
        try{
            const data = await db.tweet.findAll({
                where:{tweet_text:{
                    [Op.like]:`%${search}%`
                }},
                order: [
                    ['created_at', sort?sort:"DESC"],
                ],
            })
            res.status(201).json({data})
        }catch(err){
            console.log(err)
        }
    }
    static async PostTweet(req, res, next){
        const {id} = req.app.locals.credential
        const {tweet_text} = req.body
        // handler
        if(tweet_text.length >= 240) return  res.status(400).json({message:"sorry, max 240 characters"})

        try{
            const data = await db.tweet.create({user_id:id, tweet_text})
            res.status(201).json({message:"your tweet was uploaded", data})
        }catch(err){
            console.log(err)
        }
    }
    static async UpdateTweet(req, res, next){
        const {id} = req.params
        const {tweet_text, image} = req.body
        try{
            await db.tweet.update({tweet_text},{where:{id}})
            const data = await db.tweet.findOne({where:{id}})
            res.status(201).json({message:"your tweet was updated", data})
        }catch(err){
            console.log(err)
        }
    }
    static async DeleteTweet(req, res, next){
        const {id} = req.params
        try{
            await db.tweet.destroy({where:{id}})
            res.status(201).json({message:"your tweet was deleted"})
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = UserController