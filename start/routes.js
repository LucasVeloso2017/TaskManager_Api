'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('users','UserController.store').validator('User')
Route.post('auth','SessionController.store').validator('Session')

Route.post('forgotPassword','ForgotPasswordController.store').validator('ForgotPassword')
Route.put('resetPassword','ForgotPasswordController.update').validator('ResetPassword')

Route.get('file/:id','FileController.show')

Route.group(()=>{

    Route.post('file','FileController.store')
    Route.resource("projects",'ProjectController')
    .apiOnly()
    .validator(new Map([['projects.store'],['Project']]))
    
    
    Route.resource("projects.tasks",'TaskController')
    .apiOnly()
    .validator(new Map([['projects.tasks.store'],['Task']]))
    
}).middleware(['auth'])

