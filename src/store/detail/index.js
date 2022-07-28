import { reqGoodsInfo,reqAddOrUpdateShopCart} from "@/api";
import {getUUID} from "@/utils/uuid_token";
const state = {
    goodInfo: {},
    skuInfo:{},
    uuid_token:getUUID()
};
const actions ={
    async getGoodInfo(content,skuid){
       let result = await reqGoodsInfo(skuid)
        if(result.code ===200){
            content.commit('GETGOOD_INFO',result.data)
        }      
    },
    async addOrUpdateShopCart(content,{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code ===200){
            return 'ok'
        }else{
            return Promise.reject(new Error('error'))
        }
//因为服务器没有返回数据，所以不需要commit三连环
    }
};
const mutations ={
    GETGOOD_INFO(state,goodInfo){
        state.goodInfo = goodInfo
    },
    // ADDORUPDATESHOP_CART(state,)
};
const getters ={
    categoryView(){
        return state.goodInfo.categoryView ||{}
    },
    skuInfo(){
        return state.goodInfo.skuInfo ||{}
    },
    spuSaleAttrList(){
        return state.goodInfo.spuSaleAttrList ||[]
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}
