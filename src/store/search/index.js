//search.js
import { reqGetSearchInfo } from "@/api";
const state = {
    searchList:{},
    searchHistory:[],
};
const mutations = {
    GETSEARCH_LIST(state, data) {
        state.searchList = data;
    }
};
const actions = {
    async getSearchList(content,parmas={}){
       let result = await reqGetSearchInfo(parmas)
       if(result.code ===200){
        content.commit("GETSEARCH_LIST",result.data);
       }
    }
};
const getters = {
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};

export default{
    state,
    mutations,
    actions,
    getters
}