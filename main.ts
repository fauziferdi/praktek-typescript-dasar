// tipe data dasar pada typescript
//string
const nama: string = "Fauzi Ferdiansyah";
const address = "Ponorogo"; //otomatis tipe data string

//number
const age2: number = 20;

//boolean
const isMarried: boolean = false;

//tipe data array
const hobbies: string[] = ["Sepakbola", "Coding", "Gaming"];
const numbers: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const mixed: (string | number | boolean)[] = ["Fauzi", 20, true];
const array: Array<string> = ["Fauzi", "Ferdiansyah"];

//tipe data any
const any: any = "any";

//null dan undefined
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// tipe data object
const persons: { name: string; age: number } = {
  name: "Fauzi",
  age: 20,
};

//mengguakan interface
interface Persons {
  name: string;
  age: number;
  greet(): string;
}

const person2: Persons = {
  name: "Fauzi",
  age: 20,
  greet() {
    return `Hello ${this.name}`;
  },
};

//tipe data yang khusus ada di typescript
//tuple
const tuple: [string, number, boolean] = ["Fauzi", 20, true];

//enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Status {
  Active = "active",
  Inactive = "inactive",
}

if (Status.Active === "active") {
  console.log("Active");
} else {
  console.log("Inactive");
}

//function
//dengan return string
function greet(name: string): string {
  return `Hello ${name}`;
}

//dengan const
const greet1 = (name: string): string => {
  return `Hello ${name}`;
};

//tanpa return
function greet2(name: string): void {
  console.log(`Hello ${name}`);
}

//opsional
function greet3(name: string, age?: number): string {
  if (age) {
    return `Hello ${name}, you are ${age} years old`;
  } else {
    return `Hello ${name}`;
  }
}

//type alias
type Points = {
  x: number;
  y: number;
};

const points: Points = {
  x: 10,
  y: 20,
};

//union type
let id: string | number;

id = "hello"; // Valid, because id can be a string
id = 123; // Also valid, because id can be a number

//intersection type
//menggabungkan type data

type Admin = {
  adminId: number;
};

type Users = {
  name: string;
  age: number;
};

type AdminUser = Admin & Users;

const adminUser: AdminUser = {
  adminId: 1,
  name: "Fauzi",
  age: 20,
};

//class
class Animal2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

const cat = new Animal2("Cat");
cat.makeSound();

//inheritance
class Cat extends Animal2 {
  constructor(name: string) {
    super(name);
  }
}

//Acces Modifier
//public, private, protected

class Perseon {
  public name: string;
  private age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  public greet(): void {
    console.log(`Hello ${this.name}`);
  }
}

//Generics
//Memungkinkan pembuatan tipe data yang flexsibel dan dinamis
function identitys<T>(value: T): T {
  return value;
}

const results = identitys<number>(10);
const results2 = identitys<string>("Hello");

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const box = new Box<number>(10);

//Tipyy Utility
//Partial

interface Person3 {
  name: string;
  age: number;
}

const person3: Partial<Person3> = {
  name: "Fauzi",
};

//readonly

const person4: Readonly<Person3> = {
  name: "Fauzi",
  age: 20,
};

//pick
type Username = Pick<Person3, "name">;

const username1: Username = {
  name: "Fauzi",
};
