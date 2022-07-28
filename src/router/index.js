import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './routes'

//把VueRouter原型对象push保存一份
let originPush = VueRouter.prototype.push;
//把VueRouter原型对象replace保存一份
let originReplace = VueRouter.prototype.replace;

//重写push方法
VueRouter.prototype.push = function push(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
};
//重写replace方法
VueRouter.prototype.replace = function replace(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}
export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      return { y: 0 }
    }
})