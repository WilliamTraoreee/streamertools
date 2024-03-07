import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import { Region, SearchItemsRequest, PartnerType, Host } from 'paapi5-typescript-sdk'
import { AmazonSearchPresenter } from '../presenters/amazon.js'
import { inject } from '@adonisjs/core'

@inject()
export default class AmazonsController {
  constructor(private amazonSearchPresenter: AmazonSearchPresenter) {}

  public async search({ request, response }: HttpContext) {
    const keywords = request.body().keywords

    const searchRequest = new SearchItemsRequest(
      {
        Keywords: keywords,
        Resources: ['Images.Primary.Large', 'ItemInfo.Title', 'Offers.Listings.Price'],
      },
      env.get('AMAZON_ASSOCIATE_TAG'),
      PartnerType.ASSOCIATES,
      env.get('AMAZON_ASSOCIATE_KEY'),
      env.get('AMAZON_ASSOCIATE_SECRET_KEY'),
      Host.FRANCE,
      Region.FRANCE
    )

    const results = await searchRequest.send()

    return response.json(this.amazonSearchPresenter.json(results))
  }
}
