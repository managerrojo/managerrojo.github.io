function datos(){
//  Recolectar datos del usuario
  var age = parseInt(document.getElementById('edad').value);
  var weight = parseInt(document.getElementById('peso').value);
  var height = parseInt(document.getElementById('altura').value);
  var activity = document.getElementById('actividad').value;
  var gender = document.getElementById('sexo').value;

// const goal = prompt("Ingresa tu objetivo corporal (bajar de peso, subir de masa, tonificar)");


          // Calcular índice de masa corporal (IMC)
          const bmi = weight / (height * height);

          if(gender === 'chico'){
              gender = 1;
          }else if(gender === 'chica'){
              gender = 0;
          }else{
              alert('ingrese un genero correcto recuerda que se debe escribir tal cual como se muestra');
          }
          // Calcular índice de grasa corporal
          let bodyFat;
          if (activity === "bajo") {
            bodyFat = (1.20 * bmi) + (0.23 * age) -(10.8 * gender) + 5.4;
          } else if (activity === "moderado") {
            bodyFat = (1.40 * bmi) + (0.23 * age) -(10.8 * gender) + 5.4;
          } else {
            bodyFat = (1.80 * bmi) + (0.23 * age) -(10.8 * gender) + 5.4;
          }
          // calcular masa libre de grasa 

          mlgKg = weight -(bodyFat*weight/100);

          // Calcular somatotipo genético
          let somatotype;
          if (bodyFat < 12) {
            somatotype = "ectomorfo";
          } else if (bodyFat < 23) {
            somatotype = "mesomorfo";
          }
            else if(bodyFat <= 17 ){
            somatotype = "endomorfo";
            }
          else {
            somatotype = "mixto";

          }

           console.log('su indice de masa coropral es', bmi)
           console.log('su indice de grasa coropral es', bodyFat);
           console.log('su indice de masa somatotipo genetico', somatotype);
           console.log('su genero es ', typeof(gender));
           console.log('su masa libre de grasa es  ', mlgKg);

    };



    const otraPromesa = ()=>{
      return new Promise ((resolve, reject)=>{
        if(false)resolve('aca estamos ');
        else(reject('mehhhh'));
      })
    }
    // otraPromesa()
    // .then(response=> console.log(response))
    // .catch(err=> console.log(err))
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


    const funcionother = ()=>{
      return new Promise((r, reject)=>{
          if(true){
              r('hbjkioioioioi')
          }else{
            reject('mehhh ')
          }
        })
      }
      funcionother()
      .then(response=> console.log(response))
      .catch(err=> console.log(err))


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


    


// Recomendar plan de alimentación y entrenamiento
