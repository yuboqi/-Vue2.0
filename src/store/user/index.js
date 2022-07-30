//登录和注册模块
import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api'
import { setToken,getToken,removetoken} from '@/utils/token';
const state = {
    code: '',
    token: getToken(),
    userInfo:{},
};
const actions = {
   async getCode({commit},phone){
      let result = await  reqGetCode(phone);
      if(result.code ==200){
            commit('GETCODE',result.data);
            return 'ok'
      }else{
        return Promise.reject(new Error('获取验证码失败'))
      }
    },
    //注册
   async userRegister({commit},user){
        let result =await reqUserRegister(user)
        if(result.code ==200){
            return 'ok'
        }else{
            Promise.reject(new Error('注册失败'))
        }
    },
    //登录
    async userLogin({commit},userinfo){
       let result = await reqUserLogin(userinfo)
       //需要用户的token
       if(result.code==200){
              commit('USERLOGIN',result.data.token)
              setToken(result.data.token)
              setTimeout(()=>{
                state.token = '';
                state.userInfo = {};
                removetoken();
              },3600000)//一小时自动退出
              return 'ok'
       }else{
        Promise.reject(new Error('登录失败'))
       }
    },
    async getUserInfo({commit}){
     let result= await reqUserInfo()
     if(result.code==200){
        commit('GETUSERINFO',result.data)
        return 'ok'
     }else{
        Promise.reject(new Error('获取用户信息失败'))
     }
    },
    //退出登录
    async logout({commit}){
        let result = await reqLogout()
        if(result.code==200){
            commit('CLEARUSERINFO')
            return 'ok'
        }else{
            Promise.reject(new Error('退出登录失败'))
        }
    }
};
const mutations = {
    GETCODE(state,data){
        state.code = data;
    },
    USERLOGIN(state,token){
        state.token = token;
    },
    GETUSERINFO(state,userinfo){
        state.userInfo = userinfo;
    },
    CLEARUSERINFO(state){
        state.token = '';
        state.userInfo = {};
        removetoken();
    }
};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters
}
