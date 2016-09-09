
var MD = require('../model/member');

module.exports = {
    // allMeds: function(req,res) {
    //       MD.find({ }

    //                , function(err,md) {
    //                   res.json(md);
    //                   }) },
       


    // get : (req, res) => {
    //     if(req.params.id){            
    //         MD.findOne({ _id : req.params.id }, function(err, md){
    //             res.json(md);
    //         });
    //     }
    //     else{
    //         // Find Many
    //         MD.find({}, function(err, hqs){
    //             res.json(hqs);
    //         });
    //     }
    // },
   
   upsert : function(req, res) {
    var newMed = new MD(req.body);

    MD.findOne({_id:req.body.id},function(err,data) {
       var meds=data;       
       meds.medName=newMed.medName;
       meds.strength=newMed.strength;
       meds.dosage=newMed.dosage;
       meds.direction=newMed.direction;

    MD.save(function(err,data) {
      if(err) 
        throw err;
        res.json(data);
     });
  })
}
}
    



    
  //   if(req.params.id) {

  //     res.end('making meds');  
  //     newMed.save( function(err, data) {
  //       if(err) {
  //         console.error('something is wrong with creating profilr ')
  //         res.status(500).json({
  //           message: 'failed to create profile :('
  //         });
  //       } else {
  //         console.info("Here is ze data:", data);
  //         res.json(data);
  //       }
  //     });
  // }
// }





















// var MD = require('../model/med');

// module.exports = {
//     allMeds: function(req,res) {
//           MD.find({ }

//                    , function(err,md) {
//                       res.json(md);
//                       }) },
       


//     // get : (req, res) => {
//     //     if(req.params.id){            
//     //         MD.findOne({ _id : req.params.id }, function(err, md){
//     //             res.json(md);
//     //         });
//     //     }
//     //     else{
//     //         // Find Many
//     //         MD.find({}, function(err, hqs){
//     //             res.json(hqs);
//     //         });
//     //     }
//     // },
   
//    upsert : function(req, res) {
//     var newMed = new MD(req.body);
    
//     if(req.params.id) {
//       res.end('making meds');
//     } else {    
//       newMed.save( function(err, data) {
//         if(err) {
//           console.error('something is wrong with creating profilr ')
//           res.status(500).json({
//             message: 'failed to create profile :('
//           });
//         } else {
//           console.info("Here is ze data:", data);
//           res.json(data);
//         }
//       });
//     }
//   }
    

// }

