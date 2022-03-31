import {
    GET_USERINFO
} from './Mutation-types'

export default {
    [GET_USERINFO](state, info) {
        if (state.userInfo && (state.userInfo.userInfo !== info.username)) {
            return
        };
        if (!state.login) {
            return
        };
        if ()
    } 
}
