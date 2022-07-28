///home.js

import { reqCategoryList,reqGetBannerList} from "@/api";
const state = {
    categoryList:[],
    bannerList:[]
};
const actions = {
   async categoryList(content){
        let result =await reqCategoryList()
        if(result.code===200){
            content.commit("CATEGORY_LIST",result.data);
        } 
    },
    async bannerList(content){
       let result= await reqGetBannerList()
       if(result.code ===200){
        content.commit("GETBANNER_LISH",result.data);
       }
    }

};
const mutations = {
    CATEGORY_LIST(state,data){
        state.categoryList = data;
    },
    GETBANNER_LISH(state,data){
        state.bannerList = data;
    }
};
const getters = {
};

export default{
    state,
    mutations,
    actions,
    getters
}

// export default home ={
//     namespaced:true,
//     state:{
//         categoryList:[],
//         bannerList:[]
//     },
//     mutations:{
//         CATEGORY_LIST(state,data){
//             state.categoryList = data;
//         },
//         GETBANNER_LISH(state,data){
//             state.bannerList = data;
//         }
//     },
//     actions:{
//         async categoryList(content){
//             let result =await reqCategoryList()
//             if(result.code===200){
//                 content.commit("CATEGORY_LIST",result.data);
//             } 
//         },
//         async getBannerList(content){
//            let result= await reqGetBannerList()
//            if(result.code ===200){
//             content.commit("GETBANNER_LISH",result.data);
//            }
//         }
    
//     }
// }
