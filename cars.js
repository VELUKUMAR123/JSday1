let cars = [];
                      //1
cars.push(
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Toyota", model: "Camry", year: 2018 }
);
                      //2

cars.shift();

                       //3
cars.push({ make: "Honda", model: "Civic", year: 2020 });

                       //4.
cars[1].model = "Accord";

                       //5
console.log(cars);