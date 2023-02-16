function datos(){
    console.log("aca");

    contenedor1Uno = document.getElementById("indiceDmasa")
    BodyFatCategoryViewContai = document.getElementById("BodyFatCategoryId") 
    bodyFatMassviewContai = document.getElementById("bodyFatMassview")
    LeanBodyMassViewContai = document.getElementById("LeanBodyMassId") 
    




    contenedor2Dos = document.getElementById("seccion_2") 


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'da75596aa9msh6b3e6d3ac2951afp1257c5jsn44982367c41b',  
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }

  };
  var weight =  parseInt(document.getElementById('peso').value);
  var height =  parseInt(document.getElementById('altura').value);
  var age =  parseInt(document.getElementById('edad').value);
  var neck =  parseInt(document.getElementById('cuello').value);
  var hip =  parseInt(document.getElementById('cadera').value);
  var waist =  parseInt(document.getElementById('cintura').value);
  var activitylevel = document.getElementById('actividad').value;
  var goals = document.getElementById('objetivos').value;
  var gender  = document.getElementById('sexo').value;



  const apuCal = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`;

  const apuFat = `https://fitness-calculator.p.rapidapi.com/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`;
  //  aply asinc Javascript Course calories 
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
              view = `
              <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                  <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              % de grasa corporal</div>
                          <div class="h5 mb-0 font-weight-bold text-gray-800">${entrega.data["Body Fat Mass"]}</div>
                      </div>
                      <div class="col-auto">
                          <i class="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                  </div>
              </div>
          </div>
              `;
              contenedor1Uno.innerHTML = view;
          }catch(error){
            console.error(error)
            }
        })();
        // calculate bodFat
          function  bodyFat (){   
            async function fetchData(urlApi){
              const response = await fetch(urlApi, options)
              const data = response.json()
              return data;
            }
            (async()=>{
              try{
                const delevery = await fetchData(apuFat);
                 BodyFatCategory = delevery.data["Body Fat Category"], 
                console.log(delevery);
                bodyFatMass = delevery.data["Body Fat Mass"],
                bodyFa = delevery.data["Body Fat (U.S. Navy Method)"],
                LeanBodyMass = delevery.data['Lean Body Mass'],
                //  = delevery.data["Lean Body Mass"],



                viewResul = `
                <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                % de grasa corporal</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">${bodyFa} % </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-piggy-bank fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
               `              
               contenedor1Uno.innerHTML = viewResul

               bodyFatMassview = `
               <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Grasa en krg</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">${bodyFatMass}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-piggy-bank  fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
              `
              bodyFatMassviewContai.innerHTML = bodyFatMassview

              LeanBodyMassView = `
              <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                  <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                          <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Masa Magra en Krg 
                          </div>
                          <div class="row no-gutters align-items-center">
                              <div class="col-auto">
                                  <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">${LeanBodyMass}</div>
                              </div>
                              <div class="col">
                                  <div class="progress progress-sm mr-2">
                                      <div class="progress-bar bg-info" role="progressbar"
                                          style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                          aria-valuemax="100"></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-auto">
                          <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                      </div>
                  </div>
              </div>
          </div>
             `
             LeanBodyMassViewContai.innerHTML = LeanBodyMassView
             
             BodyFatCategoryView = `
             <div class="card border-left-warning shadow h-100 py-2">
             <div class="card-body">
                 <div class="row no-gutters align-items-center">
                     <div class="col mr-2">
                         <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                             Categoria de obesidad</div>
                         <div class="h5 mb-0 font-weight-bold text-gray-800">${BodyFatCategory}</div>
                     </div>
                     <div class="col-auto">
                         <i class="fas fa-solid fa-dumbbell fa-2x text-gray-300"></i>
                     </div>
                 </div>
             </div>
         </div>
             `
             BodyFatCategoryViewContai.innerHTML = BodyFatCategoryView

              }catch(error){
                    console.error(err);
              }
            })();
            // bmi = response.data["Body Fat (BMI method)"] 
            // IndiceGrasa = response.data['Body Fat Mass'] 
            // IndiceMasa = response.data['Lean Body Mass']
            // console.log(bmi, otro_dato, 'imprime ?');
          
          }
          bodyFat(apuFat)
} 


// function datos(){
// //  Recolectar datos del usuario
//   var age = parseInt(document.getElementById('edad').value);
//   var weight = parseInt(document.getElementById('peso').value);
//   var height = parseInt(document.getElementById('altura').value);
//   var activity = document.getElementById('actividad').value;
//   var gender = document.getElementById('sexo').value;

// // const goal = prompt("Ingresa tu objetivo corporal (bajar de peso, subir de masa, tonificar)");


//           // Calcular índice de masa corporal (IMC)
//           const bmi = weight / (height * height);
//           if(gender === 'chico'){
//               gender = 1;
//           }else if(gender === 'chica'){
//               gender = 0;
//           }else{
//               alert('debe de llenar todos los campos');
//           }
//           // Calcular índice de grasa corporal
//           let bodyFat;
//           if (activity === "bajo") {
//             bodyFat = (1.20 * bmi) + (0.23 * age) -(10.8 * gender) + 5.4;
//           } else if (activity === "moderado") {
//             bodyFat = (1.40 * bmi) + (0.23 * age) -(10.8 * gender) + 5.4;
//           } else {
//             bodyFat = (1.80 * bmi) + (0.23 * age) -(10.8 * gender) + 5.4;
//           }
//           // calcular masa libre de grasa 

//           mlgKg = weight -(bodyFat*weight/100);

//           // Calcular somatotipo genético
//           let somatotype;
//           if (bodyFat < 12) {
//             somatotype = "ectomorfo";
//           } else if (bodyFat < 23) {
//             somatotype = "mesomorfo";
//           }
//             else if(bodyFat <= 17 ){
//             somatotype = "endomorfo";
//             }
//           else {
//             somatotype = "mixto";

//           }

//            contenedor = document.getElementById("somatotipo").textContent = somatotype;
//            contenedor = document.getElementById("masa").textContent =  bmi;
//            contenedor = document.getElementById("grasa").textContent = bodyFat;
//            contenedor = document.getElementById("masa_limpia").textContent = mlgKg;

//     };

/* const almac = document.querySelector('.almac');

almac.addEventListener('click',function(){
    document.getElementById('barra').classList.toggle('active');
});


function writing(str){
let arrFromStr = str.split('');   
let i = 0;
let printStr = setInterval(function(){

 document.body.style.fontSize = '';
 document.querySelector('.text').innerHTML += arrFromStr[i];
 i++;
 if (i === arrFromStr.length){
  clearInterval(printStr);
 }
},100);
};
writing('esta es la supercalculadora para ponerse mamadisimo en 4 meses')

 */