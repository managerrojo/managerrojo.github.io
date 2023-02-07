  
function datos(){


          contenedor1Uno = document.getElementById("seccion_3") 
          contenedor2Dos = document.getElementById("seccion_2") 


        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'da75596aa9msh6b3e6d3ac2951afp1257c5jsn44982367c41b',
            'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
          }
        };
        var age =  parseInt(document.getElementById('edad').value);
        var weight =  parseInt(document.getElementById('peso').value);
        var height =  parseInt(document.getElementById('altura').value);
        var neck =  parseInt(document.getElementById('cuello').value);
        var waist =  parseInt(document.getElementById('cintura').value);
        var hip =  parseInt(document.getElementById('cadera').value);
        var activitylevel = document.getElementById('actividad').value;
        var goals = document.getElementById('objetivos').value;
        var gender  = document.getElementById('sexo').value;

        const apuCal = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`;

        const apuFat = `https://fitness-calculator.p.rapidapi.com/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`;


        // give the id table name
        const linkfood = `https://fitness-calculator.p.rapidapi.com/foodids/tablenames`

        //  aply asinc Javascript Course calories ============================================================== 
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
                              <div class="section_2_div d-flex-column">
                                  <h6> aca esta una tabla de la ingesta recomendada de calorias y los resultados que obtendrias segun tus objetivos</h6>
                                      <div class="card">
                                          <div class="card-header" >
                                              Este es tu costo  energetico diario en calorias 
                                          </div>
                                          <div class="card-body" id="grasa">
                                          ${caloryMainten}
                                          </div>
                                      </div>
                                      <div class="card">
                                          <div class="card-header">
                                              Ingesta recomendada  para ganancias extremas de masa
                                          </div>
                                          <div class="card-body" id="masa">
                                          ${calory_extremeGainWieght} 
                                          <p  class="card-header" >resultado</p>
                                          ${howManyWieghtgain}
                                          </div>
                                      </div>
                                      <div class="card">
                                        <div class="card-header">
                                          Ingesta recomendada para perdidas extremas
                                            </div>
                                              <div class="card-body" id="masa_limpia">
                                              ${howManyWieghtMiddleCalorie}
                                            <p class="card-header" >resultado</p>
                                        ${howManyWieghtMiddleLoss}
                                      </div>  
                                      <div class="card">
                                          <div class="card-header">
                                          Ingesta recomendada para perdidas extremas
                                          </div>
                                          <div class="card-body" id="masa_limpia">
                                          ${calory_extremeLoseWieght}
                                          <p class="card-header" >resultado</p>
                                          ${howManyWieghtLoss}
                                          </div>
                                </div>
                                                      <p>sigue cada consejo y seras un Spartano en corto tiempo</p>
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
                      console.log(delevery);
                      bodyFa = delevery.data['Body Fat Mass'],
                      LeanMass = delevery.data['Lean Body Mass'],

                      viewResul = `
                      <div class="section_2_div d-flex-column">
                      <div class="card">
                          <div class="card-header" >
                          grasa en Kilogramos
                          </div>
                          <div class="card-body">
                            ${bodyFa}
                          </div>
                          <div class="card">
                          <div class="card-header" >
                          su masa en Kilogramos
                          </div>
                          <div class="card-body">
                            ${LeanMass}
                          </div>
                      </div>`

                      contenedor2Dos.innerHTML = viewResul

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

    const almac = document.querySelector('.almac');

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


