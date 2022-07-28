import {reqShopCartList,reqDeleteCartById,reqUpdateCheckedByid} from '@/api';
const state = {
    cartList:[],
}
const actions = {
    // //获取购物车列表
    async getShopCartList(content){
        let result = await reqShopCartList();
        if(result.code ==200){
            content.commit('GETSHOPCART_LIST',result.data);
        }
    },
    async deleteCartListById(content,skuId){
        let result = await reqDeleteCartById(skuId);
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('失败'))
        }
    },
    async updateCheckedByid(content,{skuId,isChecked}){
      let result = await reqUpdateCheckedByid(skuId,isChecked)
      if(result.code==200){
          return 'ok'
      }else{
          return Promise.reject(new Error('失败'))
      }
    },
    updateAllCartIsChecked(content,isChecked){
        let promiseAll = [];
        content.state.cartList[0].cartInfoList.forEach(item=>{
            let promise  = content.dispatch("updateCheckedByid",{
                skuId:item.skuId,
                isChecked:isChecked
            });
            promiseAll.push(promise);
        })
        return Promise.all(promiseAll)
    }
};
const mutations = {
    GETSHOPCART_LIST(state,data){
        state.cartList = data;
    }
};
const getters = {
    cartList(){
        return state.cartList[0] || {}
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}