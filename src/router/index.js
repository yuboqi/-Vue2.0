import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './routes'
import store from '@/store'
let name = store.state.user.userInfo.name;
//把VueRouter原型对象push保存一份
let originPush = VueRouter.prototype.push;
//把VueRouter原型对象replace保存一份
let originReplace = VueRouter.prototype.replace;

//重写push方法
VueRouter.prototype.push = function push(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
};
//重写replace方法
VueRouter.prototype.replace = function replace(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { y: 0 }
    }
})

//全局守卫
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    //登录了
    if (token) {
        if (to.path == '/login') {
            //登录了再跳到登录页面就跳到首页
            next();
            // next({ path: '/home' });
        } else {
            //登录了没访问登录页面
            if (name) {
                next();
            } else {
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    //token失效，清除token，跳转到登录页面
                    store.commit('CLEARUSERINFO');
                    next({ path: '/login' });
                }

            }


        }
    } 
    else {
        next();
    }
})

export default router