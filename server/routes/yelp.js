const yelp = require("node-yelp");
require('../secret');
 
var client = yelp.createClient({
  oauth: {
    "consumer_key": process.env.key,
    "consumer_secret": process.env.secret,
    "token": process.env.token,
    "token_secret": process.env.token_secret
  }
})  

module.exports=function(city,callback){
	client.search({category_filter:"nightlife",location: city})
		.then(function (data) {
		
		var results=data.businesses.map(function(v,i){
			return {name:v.name,
				 address:v.location.display_address.join(', '),
				   phone:v.display_phone,
				     url:v.url,
				   image:v.image_url,
				  snippet:v.snippet_text,
				  going:[]
				}
			})
		callback(results)			
	});

}