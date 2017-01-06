/*
* @Author: 李海真
* @Date:   2016-12-08 02:09:35
* @Last Modified by:   李海真
* @Last Modified time: 2017-01-07 02:08:42
*/

import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LISR_FAILURE } from  '../constants/types'

export const fetchListAction = {
    fetchList ({ commit, state }, param) {
        commit(FETCH_LIST_REQUEST)

        setTimeout(() => {
          const response = {data: 'response data'}
          commit(FETCH_LIST_SUCCESS, {
              data: response.data
          })  
        }, 1000)
    }
}