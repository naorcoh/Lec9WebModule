var cars =  [{name:"fiat", year: 2020}]

var carString = JSON.stringify(cars);
console.log(carString);//

localStorage.setItem("cars",carString
)

var readCarsString = localStorage.getItem("cars");

var readCarsObject =JSON.parse(readCarsString);
console.log(readCarsObject);