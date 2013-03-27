
var request = require('superagent');
    
module.exports = function search(query, fn) {
	
	request.get('https://api.twitter.com/1.1/search/tweets.json',{q:query})
	//.data({q:query})
	.end(function(res){
		console.log(res);
		if(res.body && Array.isArray(res.body.results)){
			return fn(null, res.body.results);
		}
		fn(new Error('bad twitter response'));
	});

}

