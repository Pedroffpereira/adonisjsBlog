import { Request } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index(ctx: HttpContextContract) {
    return await Post.all()
  }
  public async store(ctx: HttpContextContract) {
    const post = new Post()

    post.name = ctx.request.input("name");

    post.save();
    return {
      "status": 200
    }
  }
}
