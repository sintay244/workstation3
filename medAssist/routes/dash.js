var kiData = require('../model/member');
module.exports = {

	get: function(req,res) {
		  kiData.find({

      }, function(err,doc) {
       	  res.json(doc);
      });
		// member.find({}, function(err, data){
  //           res.json(data);
  //          });
  },
  //   member.find(function(err,docs) {
  //      console.log("WORKING"); 
  //      res.json(docs);
  //   })


creat : function (req, res){        
            var newKid = new kiData(req.body);
        
            newKid.save(function(err, doc){
                if(err){
                    return res.json(err);
                }
                res.json(doc);
            });

    },



  remov : function(req,res) {
    kiData.remove({_id:req.params.id},function(err){
      res.json({result:err ? 'error' : 'ok'});
    })
  },
    // kiData.remove({_id: mongojs.objectID(id)},function(err,doc) {
    //   res.json(doc);
    // });
    // kiData.findOne({ _id : req.params.id }, function(err, doc){               
              

   update : function(req,res) {
    var id = req.params.id;
    kiData.findOne({_id: mongojs.objectID(id)},function(err,doc) {
      res.json(doc);
    });
  },
  
}
