// class User {
//   public email: string;
//   name: string;
//   public readonly city: string = "Akola";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  city: string = "Akola";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  // deltetoken method
  private deleteToken() {
    console.log("Token deleted");
  }

  // for getters and setters

  //getter for AppleEmail
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  // setter for AppleEmail
  set AppleEmail(apple: string) {}

  private _courseCount = 1; // setting property for the setter

  //getter for courseCount()
  get courseCount(): number {
    return this._courseCount;
  }

  //setter for courseCount()
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const sonal = new User("h@h.com", "sonal");
sonal.city = "Akola";
