import {reqAddressInfo,reqOrder} from '@/api';

const state = {
    addressInfo:[],
    orderInfo:{}
};
const actions ={
    //获取地址信息
    async getAddressInfo({commit}){
        let result =await reqAddressInfo();
        if(result.code ==200){
            commit('GETADRESSINFO',result.data);
        }
    },
    //获取订单信息
    async getOrderInfo({commit}){
        let result =await reqOrder();
        if(result.code ==200){
            commit('GETORDERINFO',result.data);
        }
    }
};
const mutations = {
    GETADRESSINFO(state,data){
        state.addressInfo = data;
    },
    GETORDERINFO(state,data){
        state.orderInfo = data;
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters,
}