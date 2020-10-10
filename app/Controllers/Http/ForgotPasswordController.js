'use strict'

const moment = require('moment')
const crypto = require('crypto')
const User = use("App/Models/User")
const Mail = use("Mail")

class ForgotPasswordController {

    async store({ request, response }){
        try{
            const email = request.input('email')
            const user = await User.findByOrFail('email',email)
    
    
            user.token = crypto.randomBytes(10).toString('hex')
            user.token_created_at = new Date()
    
            await user.save()

            await Mail.send(
                ['emails.forgot_password'],
                {
                    email,
                    token:user.token,
                    link:'http://google.com.br'
                },
                msg => {
                msg
                .to(user.email)
                .from("equipeadonisdev@adonis.com.br","Time Dev | batataApp")
                .subject("Recuperação de senha")
            })
            
        }catch(e){
            response.status(e.status).send({message:"error"})
        }
    }

    async update({request,response}){
        try{
            const{token, password} = request.all()

            const user = await User.findByOrFail('token',token)
            
            const tokenExpired = moment().subtract('2','days').isAfter(user.token_created_at)

            if(tokenExpired){
                response.status(401).send({message:"Token has been expired"})
            }

            user.token = null
            user.token_created_at = null
 
            user.password = password

            await user.save()
        }catch(e){
            response.status(e.status).send({message:"error"})
        }
    }



}

module.exports = ForgotPasswordController
