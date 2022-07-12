let value1: string | undefined | null = null;
value1 = "yooo";
console.log(value1);
value1 = null;
console.log(value1);

//Nullish Coalescence
function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? "Not Available"}`);
}

printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints zero
