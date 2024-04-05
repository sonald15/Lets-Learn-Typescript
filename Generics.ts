// it use to use component multiple time it can be method, function, etc

// <type> holds the type of variable at reurning point sends the same type of variable.
function identityOne<Type>(val: Type): Type {
  return val;
}

// identityThree(true)

identityOne(9);

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "sonal", type: 9 });
