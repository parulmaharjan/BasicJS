// //OOP in JS
// //constructor function
// //constructor fun ma this ra new use hunxa
// //constructor fun ko obj banauna we use new keyword
// //prperty ma function use garyo vani we call in method
// // function BankAc(customerName,balance =0){
// //     this.customerName = customerName;
// //     this.accountNumber = Date.now();
// //     this.balance = balance;
// // };
// //     this.deposit = function(amount){
// //         this.balance +=amount;
// //     };

// //     this.withDraw = function(amount){
// //         this.balance-=amount;
// //     }
// // }

// // const sitaAc = new BankAc("sita",1000);
// // const gitaAc = new BankAc("gita",3000);
// //BankAc.prototype.deposit= function(amount){
//    // this.balance +=amount;

// //};

// //BankAc.prototype.withDraw =function(amount){
// //this.balance -=amount;
// //};
// // sitaAc.deposit(6000);
// // gitaAc.withDraw(2000);
// // console.log(sitaAc);
// // console.log(gitaAc);
// // console.log(BankAc.prototype);
// // const ramac = new BankAc ("ram",23333);
// // const shyamac = new BankAc ("shyam",2300);
// // console.log(ramac);
// // console.log(shyamac);
// // const RamAc = new BankAc("Ram",6000);
// // const HariAc = new BankAc("Hari");
// // const SitaAc = new BankAc("Sita",10000);
// //HariAc.balance= 7000; //not suitable way so we use encapsulation -setter and getter

// RamAc.deposit(6000);
// RamAc.withDraw(5000);

// // HariAc.deposit(50000);
// // HariAc.withDraw(5000);

// // SitaAc.deposit(100);
// // SitaAc.withDraw(10000);
// // console.log(RamAc);
// // console.log(HariAc);

// //console.log(SitaAc);

// // const myForm =document.querySelector("#myForm");
// // const customerName = document.querySelector("#CustomerName");
// // const balance = document.querySelector("#Balance");
// // const depositForm = document.querySelector("#depositForm");
// // const acnum = document.querySelector("#AccountNumberr");
// // const blnc = document.querySelector("#Balancee");

// // let accounts =[];

// // myForm.addEventListener("submit", (e)=>{
// //     e.preventDefault();
// //     const Newaccount = new BankAc(customerName.value , +balance.value);
// //     accounts.push(Newaccount);
// //     console.log(accounts)});

// //     depositForm.addEventListener("submit", (e)=>{
// //     e.preventDefault();
// //     const ac = accounts.find(
// //         (item)=> item.accountNumber === +acnum.value
// //     );
// //     if (ac){
// //         ac.deposit(+blnc.value)
// //         console.log(accounts);
// //     }

// // })    




// js function ma proprty ma js ley yeuta property add gardina ieoprototype
// //protoytypr is empty obj
//method haru js ma kasari banxa constructor fun
// function add(a,b){
//     return a+b;
// }
// add(2,3);
// console.log(add);


// class in //js
//constructor method is used to initializw an obj of the class
//using class keyword
//class is efficeint
//--for creating instance using classs
//parameter bata value liney ho vaneuy we have to use constructor()
//js ma obj banayer deu
//constructor fun
//prototype
//class

//class in JS
// class BankAc{

//     constructor(customerName , balance = 0){
//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance = balance;
//     }
//     deposit(amount){
//         this.balance+= amount;
//     }

//     withdraw (amount){
//         this.balance-= amount;
//     }
// }

// const ramac = new BankAc("Ram", 6000);
// const shyamac = new BankAc("Shyam",8000);
// const sitaac =new BankAc("sita",5000);
// //ramac.deposit(5000);
// ramac.withdraw(4000);
// //shyamac.deposit(2000);
// shyamac.withdraw(4000);
// sitaac.deposit(7000);
// sitaac.withdraw(5000);
// console.log(ramac);
// console.log(shyamac);
// console.log(sitaac);

//we use inheritance insted to repeating codes
//use parents pro[erty and methods from parents obj  
//


// function pet(name,breed){
//     Animal.call(this.name);
//     this.breed =breed;
// }
// pet.prototype = Object.create(Animal.prototype);

// pet.prototype.bark = function (){
//     console.log(`${this.name} barks`);
// }

// const spot = new pet("spot","goldenRetriver");
// spot.speak();
// spot.bark();

// console.log(spot.breed);

function BankAc(customerName,balance){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAc.prototype.deposit = function(amount){
    this.balance += amount;
};

BankAc.prototype.withdraw = function(amount){
    this.balance -= amount;
};

const sitaAc = new BankAc("sita",7000);
console.log(sitaAc);
