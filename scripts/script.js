"use strict";
class Animal {
    constructor(name, age, gender, size, vaccine, img) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.img = img;
    }
    displayCard() {
        return `
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="cart-title"> Name: ${this.name}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> Age: ${this.age}</li>
        <li class="list-group-item"> Gender: ${this.gender}</li>
        <li class="list-group-item"> Size: ${this.size}</li>
        <li class="list-group-item"> Vaccine: ${this.vaccine}</li>
        </ul>    
        </div>
      </div>`;
    }
}
let animal1 = new Animal("Franky", 2, "male", "big", "yes", "pics/dog1.jpg");
document.getElementById("row").innerHTML = animal1.displayCard();
/* class Cat extends Animal {
    breed: string;
    pattern: string;
    constructor(name: string, age: number, gender: string, size: string, vaccine: string, img: string, breed: string, pattern: string){
        super(name, age, gender, size, vaccine, img, breed, pattern);
        this.breed = breed;
        this.pattern = pattern;
    }
} */ 
