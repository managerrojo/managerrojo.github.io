function datos(){

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
// var neck =  parseInt(document.getElementById('cuello').value);
// var waist =  parseInt(document.getElementById('cintura').value);
// var hip =  parseInt(document.getElementById('cadera').value);
var activitylevel = document.getElementById('actividad').value;
var goals = document.getElementById('objetivos').value;
var gender  = document.getElementById('sexo').value;

var neck = 50, waist = 96, hip =99;
var age = 31, gender = 'male', height =163, weight = 59, activitylevel = 'level_1';

const apu = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`



// OPCIONES DE REPUESTA POR DEFECTO
// fetch( apu, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err))

//  CURSO ASINCRONISMO JS 
async function fetchData(urlApi){
  const response = await fetch(urlApi, options)
  const data = response.json()
  console.log(data);
  return data;
}
(async ()=> {
  try{
    const entrega = await fetchData(apu);
    console.log(data); 

  }catch{

  }
})();

 console.log(response.data.BMR)
  GainExtrem = response.data["Extreme weight gain"]

  console.log(GainExtrem);
        // contenedor = document.getElementById("somatotipo").textContent = somatotype;
        contenedor = document.getElementById("masa").textContent =  response.data.BMR;
        contenedor = document.getElementById("grasa").textContent = bodyFat;
         contenedor = document.getElementById("masa_limpia").textContent = mlgKg;
  
// ESTA ES LA FUNCION QUE CALCULA MASA Y GRASA 
        // function  bodyFat (){   
        //   fetch( `https://fitness-calculator.p.rapidapi.com/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`, options)
        //   .then(response => response.json())
        //   // .then(response => console.log(response))
        //   .then(response => console.log(response)) // imprimirá 18.48
        //   .catch(err => console.error(err));
        
        //   bmi = response.data["Body Fat (BMI method)"] 
        //   IndiceGrasa = response.data['Body Fat Mass']
        //   IndiceMasa = response.data['Lean Body Mass']
        //   console.log(bmi, otro_dato, );
        
        // }
        // bodyFat()
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
      let arrFromStr = str.split('');   //split tranforma el string en Array
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



    // const otraPromesa = ()=>{
    //   return new Promise ((resolve, reject)=>{
    //     if(false)resolve('aca estamos ');
    //     else(reject('mehhhh'));
    //   })
    // }
    // otraPromesa()
    // .then(response=> console.log(response))
    // .catch(err=> console.log(err))
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    // const funcionother = ()=>{
    //   return new Promise((r, reject)=>{
    //       if(true){
    //           r('hbjkioioioioi')
    //       }else{
    //         reject('mehhh ')
    //       }
    //     })
    //   }
    //   funcionother()
    //   .then(response=> console.log(response))
    //   .catch(err=> console.log(err))


//     let numbers = [];
//  do {
//   console.log('aca en do ');
//   var number = parseInt(prompt('introduce un numero')); 

  
//  } while (number>0);{
//   numbers.push(number)
//   var number = parseInt(prompt('introduce un numero'));
//   console.log(numbers, 'while');
//  }

    // var numbers = [];
    // var number 
    // while (true) {
    //   var number = parseInt(prompt('introduce un numero')); 

    //   if (number>0) {
    //      numbers.push(number)
    //       console.log(numbers);
    //     } else {
    //       console.log(numbers-number);
    //      }
    
      
    // }

