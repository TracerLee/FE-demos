/*
* @Author: 李海真
* @Date:   2017-01-07 01:16:20
* @Last Modified by:   李海真
* @Last Modified time: 2017-01-07 01:17:56
*/

'use strict';

const Counter = {
	_count: 0,
	get value() {
		return ++this._count
	}
}

console.log(Counter.value)
console.log(Counter.value)
console.log(Counter.value)