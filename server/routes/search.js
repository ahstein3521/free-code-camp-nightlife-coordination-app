const Event = require('../models/event');
const User = require('../models/user');
const Yelp=require('./yelp');

module.exports=function(app){
  
  app.get('/search',function(req,res){
    Event.find({},function(e,d){
      res.send(d)
    })
  })

    
  app.put('/venue/:bar',function(req,res){
    Event.findOneAndUpdate({location:req.params.bar},req.body,{new:true},function(e,data){
      if(!data){res.status(500).send('not found')}
          res.send(req.body);
    })
  })


  app.post('/search/:city',function(req,res){
    const city=req.params.city
    
    Event.findOne({location:city},function(error,data){
      if(error){
        return res.status(422).json({error:error})
      }
      else if(!data){
        return Yelp(city,function(bars){
          Event.create({location:city,venues:bars},function(err,d){
           if(error){return res.json({error:error})}
            res.send({location:city,venues:bars})  
          })
        }) 
      }
      res.send(data)
    })
  })
} 






  