/*
* @Author: 李海真
* @Date:   2016-12-08 02:01:01
* @Last Modified by:   李海真
* @Last Modified time: 2016-12-08 02:52:11
*/

module.exports = keyMirror([
  'FETCH_LIST_REQUEST',
  'FETCH_LIST_SUCCESS',
  'FETCH_LIST_FAILURE'
])

function keyMirror (arr) {
  if (arr instanceof Array) {    
  	_obj = {}
    arr.forEach(key => _obj[key] = key)
    return _obj
  }
}