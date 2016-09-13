angular.module('thingsToDo',[]);

angular.module('thingsToDo')
    .controller('safeControl', safeCtrl)

safeCtrl.$inject=['thingsToDoFactory']

function safeCtrl(thingsToDoFactory) {
  var sCtrl=this;

	
  sCtrl.funStuff=function () {
        // console.log("working");
    	  thingsToDoFactory.getsafeData(sCtrl.city).then(function(response) {
    		sCtrl.coolData=response.data.activities;
    		thingsToDoFactory.storeData=response;
        console.log(sCtrl.coolData);
        //for loop
        
        // for (var i=0;i<sCtrl.coolData.length;i++)
        // {
                         
                     
        //     supplier[i]=sCtrl.coolData.activities[i].supplierName;;
        //   // var newArray()=supplier.push(fun.fun.coolData.activities.supplierName);
        //   // var newArray()=image.push(fun.coolData.activities.imageUrl);
      
        //   console.log(supplier[i]);
        //   // console.log(image[j])
        //  }
//for loop
    })
    return sCtrl.coolData;
   } 
}