//partial utility types- it makes object optional

interface Point {
  x: number;
  name: string;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional i.e you can give it afterward also
pointPart.x = 10;

//required - it changes all properties to required
let myCar: Required<Point> = {}; //we need to give value x

// Record- is a shortcut to defining an object type with a specific key type and value type.
const nameAge: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

// Omit- it removes keys from an object type.
const check: Omit<Point, "x"> = {
  //omit remove the x property of point interface
  name: "ABC",
};
// Pick-removes all but the specified keys from an object type.    || it is simply opposite of omit

const pickUtility: Pick<Point, "name"> = {
  name: "CGF",
};

// Exclude-removes types from a union.
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true;
