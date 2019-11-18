import {ADD_COUNTER,ADD_TO_CART} from './mutation-types'
export default{
  addCommodity(context, payload) {
    // let existProduct = null
    // for (let item in state) {
    //   if (item.iid === payload.iid) {
    //     existProduct = item
    //   }
    // }
  return new Promise((resolve,reject)=>{
    let existProduct = context.state.commodityList.find(item => item.iid === payload.iid)
    if (existProduct) {
      // existProduct.count += 1;
      context.commit(ADD_COUNTER, existProduct)
      resolve('ADD_COUNTER')
    } else {
      context.commit(ADD_TO_CART, payload)
      resolve('ADD_TO_CART')
    }
  })
  }
}