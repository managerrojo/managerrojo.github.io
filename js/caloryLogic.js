

(()=>{

    const options = {
        method: 'GET',
    headers: {
    'X-RapidAPI-Key': 'da75596aa9msh6b3e6d3ac2951afp1257c5jsn44982367c41b',  
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
};
/*         ManteinCaloryGeting = document.getElementById("ManteinCalory");
        console.log(ManteinCaloryGeting, "el contenerdor "); */
        
    
      var weight =  parseInt(document.getElementById('peso').value);
      var height =  parseInt(document.getElementById('altura').value);
      var age =  parseInt(document.getElementById('edad').value);
      var neck =  parseInt(document.getElementById('cuello').value);
      var hip =  parseInt(document.getElementById('cadera').value);
      var waist =  parseInt(document.getElementById('cintura').value);
      var activitylevel = document.getElementById('actividad').value;
      var goals = document.getElementById('objetivos').value;
      var gender  = document.getElementById('sexo').value;
      console.log("Is inside?", weight);
    
    
    
      const apuCal = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`;
    
    
    
    
    /*     START  calory FUNTION ========================= */
     
    
      
function calculaCa(){
            
            async function fetchData(urlApi){
                const response = await fetch(urlApi, options)
                const data = response.json()
                return data;
              }
              (async ()=> {
                try{
    
                  const entrega = await fetchData(apuCal);
                  caloryMainten = entrega.data["goals"]['maintain weight'],
                      calory_extremeGainWieght = entrega.data["goals"]['Extreme weight gain']['calory'],
                      howManyWieghtgain = entrega.data["goals"]['Extreme weight gain']['gain weight'],
                          howManyWieghtLoss = entrega.data["goals"]['Extreme weight loss']['loss weight'],
                          calory_extremeLoseWieght = entrega.data["goals"]['Extreme weight loss']['calory'],
                              howManyWieghtMiddleCalorie = entrega.data["goals"]['Mild weight loss']['calory'],
                              howManyWieghtMiddleLoss = entrega.data["goals"]['Mild weight loss']['loss weight'];
                              console.log(howManyWieghtMiddleLoss, howManyWieghtMiddleCalorie, howManyWieghtLoss);
                             
                
              ManteinCaloryView = `
                     <div class="card border-left-primary shadow h-100 py-2">
                     <div class="card-body">
                         <div class="row no-gutters align-items-center">
                             <div class="col mr-2">
                                 <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                     tus Calorias de mantenimiento </div>
                                 <div class="h5 mb-0 font-weight-bold text-gray-800">${caloryMainten}</div>
                             </div>
                             <div class="col-auto">
                                 <i class="fas fa-calendar fa-2x text-gray-300"></i>
                             </div>
                         </div>
                     </div>
                 </div>
                    `;
                    
      
                    console.log(howManyWieghtMiddleLoss, howManyWieghtMiddleCalorie);
                    /* ManteinCaloryGeting.innerHTML = ManteinCaloryView; */
                }catch(error){
                  console.error(error)
                  }
              })();
    
    
            }
     
    
    /*     END calory FUNTION ========================= */
    
            // calculate bodFat
    


})();