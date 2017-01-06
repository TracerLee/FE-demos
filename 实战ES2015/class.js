/*
* @Author: 李海真
* @Date:   2017-01-07 01:24:40
* @Last Modified by:   李海真
* @Last Modified time: 2017-01-07 01:28:32
*/

'use strict';

class Point {
	constructor(x, y) {
		this.x = x
		this.y = y
	}

	get d() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
	}
}

const p = new Point(3,4)
console.log(p.d)