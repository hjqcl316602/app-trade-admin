/**
 * created by 41587 on 2019/11/7
 */

import storager from '../../libs/storager'
import randomString from '../../libs/random.string'
const custom = {
    state: {
        letter: storager.getStore('app/custom/letter') || [],
    },
    mutations: {
         setLetter({ letter } , value ){
             letter.push({ id : randomString(16) , text : value })
             storager.setStore('app/custom/letter',letter)
         },
        clearLetter(state,id){
            state.letter = state.letter.filter(ele=>{
                return ele.id !== id
            })
            storager.setStore('app/custom/letter',state.letter)
        }
    }
};

export default custom;
