class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected key: Key;
  protected isOpen: boolean;
  protected people: Person[] = [];

  constructor(key: Key) {
    this.key = key;
    this.isOpen = false;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.isOpen) {
      this.people.push(person);
      console.log('Welcome!');
    } else {
      console.log('The door is closed!');
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.isOpen = true;
      console.log('The door is open!');
    } else {
      console.log('Wrong key!');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
