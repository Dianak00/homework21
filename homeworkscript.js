//Varianta 1
const heightVadim = 1.69;
const heightAlex = 1.95;
let weightVadim = 78;
let weightAlex = 92;
let BMIVadim = weightVadim / heightVadim **2;
console.log(BMIVadim);
let BMIAlex = weightAlex / heightAlex **2;
console.log(BMIAlex);
let markHeigherBMI = BMIVadim > BMIAlex;
console.log('In primul caz, BMI Vadim este mai mare ca BMI ALex este '+ markHeigherBMI);

//Varianta 2
const heightVadimV2 = 1.88;
const heightAlexV2 = 1.76;
let weightVadimV2 = 95;
let weightAlexV2 = 85;
let BMIVadimV2 = weightVadimV2 / (heightVadimV2*heightVadimV2);
console.log(BMIVadimV2);
let BMIAlexV2 = weightAlexV2 / (heightAlexV2 **2);
console.log(BMIAlexV2);
let markHeigherBMIV2 = BMIVadimV2 > BMIAlexV2;
console.log("In al 2-lea caz, BMI Vadim este mai mare ca BMI Alex este " + markHeigherBMIV2);