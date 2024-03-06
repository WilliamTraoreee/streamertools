import { SearchItemsResponse } from 'paapi5-typescript-sdk'

export class AmazonSearchPresenter {
  json(results: SearchItemsResponse) {
    return [
      ...results.SearchResult.Items.map((item) => ({
        link: item.DetailPageURL,
        title: item?.ItemInfo?.Title ? item.ItemInfo.Title.DisplayValue : null,
        price:
          item.Offers && item.Offers.Listings[0].Price
            ? item.Offers.Listings[0].Price.DisplayAmount
            : null,
        image:
          item.Images && item.Images.Primary && item.Images.Primary.Medium
            ? item.Images.Primary.Medium.URL
            : null,
      })),
    ].filter((item) => item.title && item.price && item.image)
  }
}
