import requests from "./request";

import mockrequest from '@/api/mockrequest'
//三级联动接口
// /api/product/getBaseCategoryList  get 无参数
export const reqCategoryList = (()=>{
    //发请求,返回值为promise对象
    return requests({url:'/product/getBaseCategoryList',method:'get'});
})

export const reqGetBannerList = ()=>mockrequest.get('/banner');

export const reqGetSearchInfo = (params)=>requests({
    url:'/list',
    method:'post',
    data:params
});

export const reqGoodsInfo = (skuid)=>requests({
     url:`/item/${skuid}`,
    method:'get',
    });

export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({
    url:`/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
});

export const reqShopCartList = ()=>requests({
    url:'/cart/cartList',
    method:'get',
});

export const reqDeleteCartById = (skuId)=>requests({
    url:`/cart/deleteCart/${skuId}`,
    method:'delete',
})

export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({
    url:`/cart/checkCart/${skuId}/${isChecked}`,
    method:'get',
})

export const reqGetCode = (phone)=>requests({
    url:`/user/passport/sendCode/${phone}`,
    method:'get',
})

export const reqUserRegister = (data)=>requests({
    url:'/user/passport/register',
    method:'post',
    data,
})

export const reqUserLogin = (data)=>requests({
    url:'/user/passport/login',
    method:'post',
    data,
})

export const reqUserInfo = ()=>requests({
    url:'/user/passport/auth/getUserInfo',
    method:'get',
})

export const reqLogout = ()=>requests({
    url:'/user/passport/logout',
    method:'get',
})

export const reqAddressInfo = ()=>requests({
    url:'/user/userAddress/auth/findUserAddressList',
    method:'get',
})

export const reqOrder = ()=>requests({
    url:'/order/auth/trade',
    method:'get',
})

export const reqSubmitOrder =(tradeNo,data)=>requests({
    url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method:'post',
    data,
})

export const reqPayInfo = (orderId)=>requests({
    url:`/payment/weixin/createNative/${orderId}`,
    method:'get'
})

export const reqPayStatus = (orderId)=>requests({
    url:`/payment/weixin/queryPayStatus/${orderId}`,
    method:'get'
})

export const reqmyOrderList = (page,limit)=>requests({
    url:`/order/auth/${page}/${limit}`,
    method:'get',
})