'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {

    user(){
        return this.belongsTo("App/Models/User")
    }


    tasks(){
        return this.hasMany("App/Models/Task")
    }

    /**
     * Um projeto pertence a um usuario --- belongs to User
     * 
     * Um projeto pode ter varias tarefas --- has many tasks
     */

}

module.exports = Project
