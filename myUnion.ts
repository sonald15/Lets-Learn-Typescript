
// use when we r not sure which data type  is coming from user

let score: number | string | boolean = 33;
score = 44;

//  user define data types for union ---------------------------------------------------------------------------------

type User2 = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: User2 | Admin = { username: "hitesh", id: 343 };
hitesh = { username: "dsd", id: 202 };

//----------------------------------------------------------------------------------------------------------------------
//Union using in function

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    return id + 2;
  }
}
//------------------------------------------------------------------------------------------------------------------------
// use of union in array

const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
const data2: (string | number | boolean)[] = ["1", "2", 3, true]; // circular paranthesis allows to add multiple type of data

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";

//---------------------------------------------------------------------------------------------------------------------
