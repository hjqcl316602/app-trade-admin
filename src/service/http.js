import axios from 'axios'
import qs from 'qs'
import { Message } from 'iview'

let isLocal = (function () {
    return window.location.href.indexOf('localhost') > -1 || window.location.href.indexOf('192.168') > -1 || window.location.href.indexOf('127.0') > -1;
})();


// 基础路径 // http://103.91.217.37/
export const BASEURL = axios.defaults.baseURL = isLocal ? 'http://trade.bstchain.com/' : window.location.origin + '/';//'http://39.104.119.155:9090/';
//http://103.91.217.37/trade/admin/cms/system-advertise/page-query //http://trade.bstchain.com/


export const fetch = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                console.log('login-err')
                reject(err);
            })
    })
}

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data, { arrayFormat: 'repeat' }))
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                console.log('login-err')
                reject(err);
            })
    })
}

export const patch = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.patch(url, qs.stringify(data, { arrayFormat: 'repeat' }))
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const put = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.put(url, qs.stringify(data))
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const postConfig = (url, data = {}, config) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, config)
            .then(response => {
                resolve(response.data)
            })
            .catch(err => {
                reject(err);
            })
    })
}

