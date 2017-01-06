import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from  '../constants/types'

export const fetchListMutation = {
    [FETCH_LIST_REQUEST] (state) {
        state.isFetching = true
    },
    [FETCH_LIST_SUCCESS] (state, action) {
        state.isFetching = false
        state.data = action.data
        state.lastUpdated = (new Date()).getTime()
        console.log(state)
    },
    [FETCH_LIST_FAILURE] (state, action) {
        state.isFetching = false
        state.error = action.error
    }
}