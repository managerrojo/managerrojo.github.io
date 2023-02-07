const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'da75596aa9msh6b3e6d3ac2951afp1257c5jsn44982367c41b',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }};


table_name = ["SR25", "Su28", "SR9", "SR8", "SR20", "SR6", "SR24", "SR14", "SR17", "SR5",  "Su17",  "SR38", "Su35", "SR21", "Su21", "SR22", "Su1", "SR35", "SR34", "Su16", "Su2", "Su14", "SR28", "Su15", "SR39", "Su29", "SR19", "Su6", "Su12", "SR4", "Fo1", "SR11", "Su36", "SR33", "SR26", "SR3", "SR12", "SR29", "Su13", "Su8", "Su3", "SR18", "SR2", "Su19", "Su27", "Su33", "Su20", "SR15", "Su7", "Su32", "Su22", "Su9", "Su34", "SR1", "Su18", "Su5", "Su31", "SR16", "Su25", "Su24", "Su30", "SR10", "Su26", "SR37", "Su23", "SR13", "SR36", "SR23", "SR7", "SR27", "Su4", "Su10", "Su11", "SR31", "SR30", "SR32"]


let counter = 0;
const limit = 100;
for (const valor of table_name) {
 /*  if (counter === limit) break; */

  const linkTable = `https://fitness-calculator.p.rapidapi.com/foodids?subtablename=SR27_1`
  async function fetchData(urlApi){
    const response = await fetch(urlApi, options)
    const data = response.json()
    return data;
  }(async ()=> {
    try{
        const entrega = await fetchData(linkTable);
        console.log(entrega);
        for (const array in entrega) {
          entrega.data.forEach(function(obj) {
            /* if (counter === limit) break; */
            for (const propiedad in obj) {
              console.log(`${propiedad}:  ${obj[propiedad]} \n`);
              counter++;
            }
          });
        }

    }catch(error){
        console.error(error);
      }
    })();
  }
