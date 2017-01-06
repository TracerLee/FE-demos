/*
* @Author: 李海真
* @Date:   2016-12-08 02:13:08
* @Last Modified by:   李海真
* @Last Modified time: 2016-12-08 02:19:09
*/

export const fetchListGetter = {
    hotList (state) {        
        return state.fetchList.data.slice(0, 10)
    }
}