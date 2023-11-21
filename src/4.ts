/*
# Завдання 4 *
У цьому завданні вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.
Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.
Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.
Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.
Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.
Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.
Наприклад, ось так:
*/
class Key {
    private signature: number;
    
    constructor() {
        this.signature = Math.random();
    };

    getSignature(): number {
        return this.signature ;
    }
}

class Person {
    constructor(private key: Key) {
        this.key
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected tenants: Person[] = [];

    constructor(protected key: Key) {
        this.key = key;
    }

    comeIn(person: Person): void {
        if(this.door === true) {
            this.tenants.push(person);
            console.log("The door is open. Person is at home.");
        } else {
            console.log('The door is closed. Enter is not allowed.');
        }
    }

    abstract openDoor(key: Key): void;  
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("The door is open. You may enter.");
        } else {
            console.log('The door is closed. Enter is not allowed.');
        }
    }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};