
var request = require('superagent');
    
module.exports = function search(query, fn) {
	var TwitterOAuthHeader = 'OAuth ';
		
		TwitterOAuthHeader += encodeURIComponent('') + '="' + encodeURIComponent('') +'", ';
		TwitterOAuthHeader += encodeURIComponent('') + '="' + encodeURIComponent('') +'", ';
		TwitterOAuthHeader += encodeURIComponent('') + '="' + encodeURIComponent('') +'", ';
		TwitterOAuthHeader += encodeURIComponent('') + '="' + encodeURIComponent('') +'", ';

	/*
		Authorization: 
        OAuth oauth_consumer_key="xvz1evFS4wEEPTGEFPHBog", 
              oauth_nonce="kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg", 
              oauth_signature="tnnArxj06cWHq44gCs1OSKk%2FjLY%3D", 
              oauth_signature_method="HMAC-SHA1", 
              oauth_timestamp="1318622958", 
              oauth_token="370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb", 
              oauth_version="1.0"


		
	

	*/

	request.get('http://search.twitter.com/search.json',{q:query})
		.set('Authorization','')

		//.data({q:query})
		.end(function(res){
			console.log(res);
			if(res.body && Array.isArray(res.body.results)){
				return fn(null, res.body.results);
			}
			fn(new Error('bad twitter response'));
		});

}

