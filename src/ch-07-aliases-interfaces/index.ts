//Type
type carYear = number;
type carType = string;
type car = {
  year: carYear;
  type: carType;
};

//using interface
interface Rectangle {
  height: number;
  width: number;
}

//extending interface-old properties + new properties

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
