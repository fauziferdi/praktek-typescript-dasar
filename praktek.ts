// 1. Deklarasikan variabel berikut dengan tipe data yang sesuai:
// 1. Variabel username yang berisi string "Alice".
// 2. Variabel age yang berisi angka 25.
// 3. Variabel isAdmin yang berisi nilai boolean true.
// 4. Variabel colors yang berisi array string ["red", "green", "blue"].

const username: string = "Alice";
const age: number = 25;
const isAdmin: boolean = true;
const colors: string[] = ["red", "green", "blue"];

// 2. Buat fungsi bernama multiply yang menerima dua parameter bertipe number dan mengembalikan hasil perkalian keduanya.

function multiply(number1: number, number2: number): number {
  return number1 * number2;
}

// 3. Buat interface Car dengan properti:

interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = {
  brand: "Honda",
  model: "Reguler",
  year: 2012,
};

// 4. Buat variabel bernama userId yang dapat bertipe string atau number. Berikan nilai awal "123".

const userId: string | number = "123";

// 5. Buat class bernama Animal dengan properti name (string) dan method makeSound yang mencetak "Some generic sound". Lalu, buat instance dari class tersebut.
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log("Some generic sound");
  }
}

const animal = new Animal("Duck");
animal.makeSound();

// 6. Buat class Dog yang mewarisi dari class Animal. Override method makeSound untuk mencetak "Woof!".

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog("Dog");
dog.makeSound();

//7. Buat fungsi generic bernama identity yang menerima satu parameter dan mengembalikan parameter tersebut.

function identity<T>(value: T): T {
  return value;
}

const result = identity<number>(10);
const result2 = identity<string>("Hello");

// 8. Buat type alias Point untuk mendefinisikan objek dengan properti:
// · x (number)
// · y (number)
// Lalu buat variabel pointA dengan nilai { x: 10, y: 20 }.

type Point = {
  x: number;
  y: number;
};

const pointA: Point = {
  x: 10,
  y: 20,
};

// 9. Buat class BankAccount dengan:
// 1. Properti private balance (number).
// 2. Method deposit untuk menambah saldo.
// 3. Method getBalance untuk mendapatkan saldo.

class BankAccount {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// 10. Buat interface User dengan properti:
// 1. id (readonly, number)
// 2. name (string)
// Lalu buat variabel user dengan properti id: 1 dan name: "Alice".

interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Alice",
};

// 11. Buat interface Profile dengan properti:
// 1. name (string)
// 2. age (number)
// Gunakan Partial untuk membuat variabel profileUpdate di mana semua properti opsional.

interface Profile {
  name: string;
  age: number;
}

const profileUpdate: Partial<Profile> = {
  name: "Alice",
};

// 12. Buat enum Role dengan nilai:
// 1. Admin
// 2. User
// 3. Guest
// Lalu buat variabel currentRole dengan nilai Role.User.

enum Role {
  Admin,
  User,
  Guest,
}

const currentRole: Role = Role.User;

// 13. Buat dua type alias Employee dan Manager, lalu gabungkan keduanya menggunakan intersection type.

type Employee = {
  name: string;
  salary: number;
};

type Manager = {
  department: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const employeeManager: EmployeeManager = {
  name: "Alice",
  salary: 5000,
  department: "IT",
  teamSize: 10,
};

// 14. Buat sebuah objek person dengan properti opsional address. Gunakan optional chaining untuk mengakses city di dalam address.

interface Person {
  name: string;
  age: number;
  address?: {
    street: string;
    city: string;
  };
}

const person: Person = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

console.log(person.address?.city);

// 15. Buat fungsi calculateDiscount yang menerima dua parameter:
// 1. price (number)
// 2. discount (number, default: 10)
// Fungsi mengembalikan harga setelah diskon.

function calculateDiscount(price: number, discount: number = 10): number {
  return price * (1 - discount / 100);
}
