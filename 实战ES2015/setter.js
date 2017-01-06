/*
* @Author: 李海真
* @Date:   2017-01-07 01:20:51
* @Last Modified by:   李海真
* @Last Modified time: 2017-01-07 01:23:32
*/

'use strict';

const List = {
	_array: [],

	set new(value) {
		this._array.push(value)
	},

	get last() {
		return this._array[0]
	},

	get value() {
		return this._array
	}
}

List.new = 1
List.new = 2
List.new = 3

console.log(List.last)
console.log(List.value)