'use strict'

const Project = use("App/Models/Project")

class ProjectController {

  async index ({ request, response, view }) {

    const project = await Project.query()
    .with('user')
    .with('tasks')
    .fetch()

    return project
  }

  async store ({ request, response , auth}) {

    const data = request.only(['title','description'])

    const project = await Project.create({...data,user_id:auth.user.id})

    return project
  }

  async show ({ params, request, response, view }) {

    const projects = await Project.findOrFail(params.id)

    await projects.load('user')
    await projects.load('tasks')
    
    return projects
  }

  async update ({ params, request, response }) {
    const projects = await Project.findOrFail(params.id)
    const data = request.only(['title','description'])

    projects.merge(data)

    await projects.save()

    return projects
  }

  async destroy ({ params, request, response }) {
    
    const projects = await Project.findOrFail(params.id)

    return projects.delete()
  }
}

module.exports = ProjectController
