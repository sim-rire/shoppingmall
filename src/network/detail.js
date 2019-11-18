import {request} from './request'

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url:'/recommend'
  })
}
export class titleInfo{
  constructor(itemInfo,columns,shopInfo){
    this.title=itemInfo.title;
    this.price=itemInfo.lowPrice
    this.discountDesc=itemInfo.discountDesc
    this.discountBgColor=itemInfo.discountBgColor
    this.oldPrice=itemInfo.oldPrice
    this.columns=columns
    this.services=shopInfo.services

  }
}

export class shop{
  constructor(shopInfo){
    this.logo=shopInfo.shopLogo
    this.name=shopInfo.name
    this.fans=shopInfo.cFans
    this.goods=shopInfo.cGoods
    this.sells=shopInfo.cSells
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}