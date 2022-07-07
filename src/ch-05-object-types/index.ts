//if typescript do not infer the types in objects then it would be very difficult to specify types
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

//optional property- the property which is optional to add

const car1: { type: string; mileage?: number } = {
  type: "Toyota",
};
car1.mileage = 100;

//index signatures
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.jack = 22;
nameAgeMap.don = 11;
nameAgeMap.mark = "ABC";
