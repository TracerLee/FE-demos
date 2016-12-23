var config = require('./config');
var fs = require('fs');

module.exports = function (app, cb) {
	var projectsName = [];
	for(var i in config.projects){
		projectsName.push(i);
	}

	(function (i, len, count, callback) {
	    for (; i < len; ++i) {
	        (function (i) {
	            fs.access('./apps/' + config.projects[projectsName[i]].en, function (err) {
	                if(!err){
						app.use('/' + (config.projects[projectsName[i]].en == 'root'? '' : config.projects[projectsName[i]].en), require('./apps/' + config.projects[projectsName[i]].en + '/routes/index'));
						// console.log('/' + (config.projects[projectsName[i]].en == 'root'? '' : config.projects[projectsName[i]].en), './apps/' + config.projects[projectsName[i]].en + '/routes/index');
	                }else {
	                	console.log(config.projects[projectsName[i]].cn + ' 不存在');
	                }
	                if (++count === len) {
	                    callback();
	                }
	            });
	        }(i));
	    }
	}(0, projectsName.length, 0, function () {
	    // All array items have processed.
	    console.log('路由设置结束遍历');
	    cb && cb();
	}));
}