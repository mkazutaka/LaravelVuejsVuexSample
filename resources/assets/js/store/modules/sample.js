import * as types from '../mutation-types'
import api from '../../api/sample'

const namespaced = true;

const state = {
    receive_response: false,
    response_contents: 'Please wait Response...',
};

// actions
const actions = {
    [types.TOGGLE_STATE] ({commit}, target){
        commit(types.TOGGLE_STATE,target);
    },
    [types.SEND_REQUEST] ({commit}, url){
        console.log("SEND REQUEST:" + url);
        api.sendRequest(url,
            response => {
                console.log("CATCH RESPONSE:" + url);
                commit(types.CHANGE_CONTENTS, {target:'response_contents', contents:response[0]})
                commit(types.TOGGLE_STATE, 'receive_response')
            },
            error => {
                console.log(error)
            }
        )
    }
};

// mutations
const mutations = {
    [types.TOGGLE_STATE] (state, target){
        state[target] = !state[target];
    },
    [types.CHANGE_CONTENTS] (state, {target, contents}){
        state[target] = contents;
    }
};

export default {
    namespaced,
    state,
    actions,
    mutations
}
