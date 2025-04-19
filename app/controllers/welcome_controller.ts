import type { HttpContext } from '@adonisjs/core/http'

export default class FeedController {
  async index({ view }: HttpContext) {
    

    return view.render('pages/welcome', )
  }
}
