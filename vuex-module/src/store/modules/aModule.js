import { fetchListAction } from '../actions/aAction'
import { fetchListGetter } from '../getters/aGetter'
import { fetchListMutation } from '../mutations/aMutation'

export const list = {
    state: {
        isFetching: false,
        data: ''
    },
    actions: fetchListAction,
    getters: fetchListGetter,
    mutations: fetchListMutation
}