"use strict";
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

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
        <div class ="col">
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-none d-md-block" alt="...">
        <div class="card-body">
        <h5 class="cart-title"> Name: ${this.name}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> Age: ${this.age}</li>
        <li class="list-group-item"> Gender: ${this.gender}</li>
        <li class="list-group-item"> Size: ${this.size}</li>
        <li class="list-group-item"> Vaccine: ${this.vaccine}</li>
        </ul>    
        </div>
      </div>
      </div>`;
    }
}
class Cat extends Animal {
    constructor(name, age, gender, size, vaccine, img, breed, pattern, address) {
        super(name, age, gender, size, vaccine, img);
        this.breed = breed;
        this.pattern = pattern;
        this.address = address;
    }
    displayCard() {
        return `
        <div class ="col">
        <div class="card col" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-none d-md-block" alt="...">
        <div class="card-body">
        <h5 class="cart-title"> Name: ${this.name}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> Age: ${this.age}</li>
        <li class="list-group-item"> Gender: ${this.gender}</li>
        <li class="list-group-item"> Size: ${this.size}</li>
        <li class="list-group-item"> Vaccine: ${this.vaccine}</li>
        <li class="list-group-item"> Breed: ${this.breed}</li>
        <li class="list-group-item"> Pattern: ${this.pattern}</li>
        <li class="list-group-item"> Web Address: ${this.address}</li>
        </ul>    
        </div>
      </div>
      </div>`;
    }
}
class Dog extends Animal {
    constructor(name, age, gender, size, vaccine, img, breed, trainingskill) {
        super(name, age, gender, size, vaccine, img);
        this.breed = breed;
        this.trainingskill = trainingskill;
    }
    displayCard() {
        return `
        <div class ="col">
        <div class="card col" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top d-none d-md-block" alt="...">
        <div class="card-body">
        <h5 class="cart-title"> Name: ${this.name}</h5>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> Age: ${this.age}</li>
        <li class="list-group-item"> Gender: ${this.gender}</li>
        <li class="list-group-item"> Size: ${this.size}</li>
        <li class="list-group-item"> Vaccine: ${this.vaccine}</li>
        <li class="list-group-item"> Breed: ${this.breed}</li>
        <li class="list-group-item"> Training skill: ${this.trainingskill}</li>
        </ul>    
        </div>
      </div>
      </div>`;
    }
}
let animal1 = new Animal("Bacon", 1, "male", "small", "yes", "pics/pig.jpg");
let animal2 = new Animal("Sonic", 3, "male", "small", "yes", "pics/hedgehog.jpg");
let cat1 = new Cat("Meow", 2.5, "female", "medium", "no", "pics/cat1.jpg", "Siberian", "white/black", "https://www.dailypaws.com/cats-kittens/cat-breeds/siberian");
let cat2 = new Cat("Purry", 5, "male", "small", "yes", "pics/cat2.jpg", "Sphynx", "ebony/cream", "https://www.dailypaws.com/cats-kittens/cat-breeds/sphynx");
let dog1 = new Dog("Franky", 7, "male", "Big", "No", "pics/dog1.jpg", "Golden Retriever", "yes");
let dog2 = new Dog("Destroyer", 2, "female", "small", "No", "pics/dog2.jpg", "Mixed Terrier", "no");
let dog3 = new Dog("Smiley", 4, "male", "Medium", "yes", "pics/dog3.jpg", "Australian bipbop", "no");
let dog4 = new Dog("Kira", 5, "female", "Big", "yes", "pics/dog4.jpg", "Alaskan Malamute", "yes");
let animals = [animal1, animal2, cat1, cat2, dog1, dog2, dog3, dog4];
animals.forEach((val) => {
    document.getElementById("row").innerHTML += val.displayCard();
});
