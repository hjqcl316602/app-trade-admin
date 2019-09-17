/**
 * created by 41587 on 2019/9/17
 */
import {
    post
} from './http'

const request = function( url,data,successStatus = 0){
    return new Promise((resolve,reject)=>{
        post(url,data).then(res=>{
            if(res.code === successStatus) resolve(res['data'])
            else reject()
        }).catch(e=> reject())
    })
}

export const getMember = data => request('admin/member/memberAccount', data );
export const updateMember = data => request('admin/member/memberAccountUpdate', data );
