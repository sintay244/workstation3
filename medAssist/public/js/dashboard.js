angular.module('app.dashboard', []);
angular.module('app.dashboard')
    .controller('dashboardController', dashboard)
    .factory('dashfactory',dashfact)

dashboard.$inject=['dashfactory']
function dashboard(dashfactory)
{
    // console.info('dasboard is functional');
    dCtrl=this;
    dCtrl.member={};
    dCtrl.kidList={};
    dCtrl.fdData={};
    dCtrl.medList={};
    dCtrl.kidMeds={};
    dCtrl.bDay={};
    dCtrl.MED={}; 
    
    dCtrl.getAllKids= function () 
    {
    	dashfactory.
    	        getAll().then(function(response) {
                    console.log('COLLECTING');  
                    console.log(response.data);
                    var x=response.data.length;                         	
                    dCtrl.kidList=response.data;
                    dCtrl.kidsName=response.data.name;                    
    	        });
            return dCtrl.kidList;
    }            

                                        
                    
    dCtrl.makeKids=function()
    {        
    	dashfactory.
    	        createMem(dCtrl.member).then(function(response){
                    console.log('MAKING kids')
    	        	console.log(response)
    	        	// dCtrl.getAllKids();
                    dCtrl.kidList=response.data;   	        	
    	        });
            
    }
                      
                   
    dCtrl.fda=function() {  
        
         dashfactory.
               FDA(dCtrl.fdData.name).then(function(response){
                  console.log("this is FDA data",response.data);                  
                  dCtrl.medList=response.data.results[0].dosage_and_administration[0];                  
               }),function(err) {
                console.error("sorry, i couldn't find any")
               }

          return dCtrl.medList;     
    }
// use this to get info about all meds in patients profile
    // dCtrl.fdaSec=function() {  
        
    //      dashfactory.
    //            FDA(dCtrl.fdData.auto).then(function(response){
    //               console.log("this is FDA data",response.data);                  
    //               dCtrl.medList=response.data.results[0].dosage_and_administration[0];
    //               // dCtrl.otherList=dCtrl.allMeds.results[0].pregnancy_or_breast_feeding[0];
    //            }),function(err) {
    //             console.error("sorry, i couldn't find any")
    //            }

    //       return dCtrl.medList;     
    // } 


    dCtrl.makeMeds = function () {
        dashfactory
            .createMD(dCtrl.newMed)
            .then(function(response){
                console.log(response);
            }),function(err) {
                console.error("sorry, i couldn't make meds")
    }


    dCtrl.allMeds = function () {
        dashfactory
            .getMeds()
            .then(function(response){
                console.log("checking if making");                              
            dCtrl.kidMeds=response.data;            

            })
    }

    dCtrl.remov = function() {

         console.log();
          dashfactory
            .delet(dCtrl.kidList.id)
            .then(function(response){
                console.log("removing");
                console.log(response);
                dCtrl.res=response;
            })
            return  dCtrl.res;
        }

    dCtrl.update = function() {
     
      dashfactory
        .edit()
        .then(function(response){
            console.log("removing");
            console.log(response);
            dCtrl.Res=response;
        })

        return  dCtrl.Res;
    }

    dCtrl.rxMeds = function() {
        dashfactory
        .rxUpdate()
        .then(function(response){

         dCtrl.rx=response;
        })

        return  dCtrl.rx;
    }

}
}
    
         
                    





//Factory

dashfact.$inject=['$http']

function dashfact($http)
{
	function getAll() {
		return $http.get('/api/kids')
        console.log(response)
	}

	function createMem(kdata) {
		return $http.post('/api/kids',kdata)
	}
    function createMD(mdata) {
        return $http.post('/api/meds',mdata)
    }
    function rxUpdate(mdata) {
        return $http.post('/api/meds/' + mdata)
    }

    function delet(dy) {
        return $http.get('/api/kids/' + dy)
    }
    
    function edit(dy) {
        return $http.post('/api/kids/' + dy)
    } 


    function getMeds (){
        
        return $http.get(`/api/meds`)
        
    }

    function FDA(med) {

     return $http.get("https://api.fda.gov/drug/label.json?api_key=3Q5d5PPOI9cqCB7pOBEGgdP835vyAk2rd3UBwcrz&search="+med)

    }

	return {
	    getAll     : getAll,
	    createMem  : createMem,
        FDA        : FDA,
        getMeds    : getMeds,
        createMD   : createMD,
        delet      : delet,
        edit       : edit,
        rxUpdate   : rxUpdate,
	}
}










