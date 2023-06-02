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

// function BankAc(customerName,balance){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAc.prototype.deposit = function(amount){
//     this.balance += amount;
// };

// BankAc.prototype.withdraw = function(amount){
//     this.balance -= amount;
// };

// const sitaAc = new BankAc("sita",7000);
// console.log(sitaAc);

// class BankAc {
//    #balance;
//   constructor(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.#balance = balance;
//   }
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     this.#balance -= amount;
//   }
  
// setBalance(amount){
//     this.#balance = amount;
// } 

// getBalance (amount){
//     return this.#balance ;
// }
// }
// class savingAc extends BankAc {
//   transactionLimit = 50000;
//   constructor(customerName, balance) {
//     super(customerName, balance); //super represnts parent constructor
//   }
//   #calculateIntrest(amount){
//     console.log("calculating intrest  :"+amount);
//   }
//   takePersonalLoan(amount) {
//     this.#calculateIntrest(amount);
//     console.log("taking personal loan" + amount);
//   }
// }
// class currentAc extends BankAc {
//   transactionLimit = 10000;
//   constructor(customerName, balance) {
//     super(customerName, balance);
//   }
//   takePersonalLoan(amount) {
//     console.log("taking personal loan" + amount);
//   }
// }
// const ramac = new savingAc("ram", 6000);
// ramac.takePersonalLoan(20000);
//const sitaAc = new savingAc("sita", 6000);
//ramac.setBalance(500);
//const hey =ramac.getBalance();
//ramac.balance= 8000;
// sitaAc.deposit(2000);
// sitaAc.withdraw(1000);
// ramac.deposit(4000);
// ramac.deposit = "SITA";
// ramac.withdraw(1000);
//console.log(hey);
// console.log(ramac);
// console.log(sitaAc);

//encapsulation-- class ko property lai class bahira bata acees garna nadini.....
//use # keyword
//#method
//class .....{
//    #...
//}


//static property and method 
//class vitra ko method ra properties lai direct access garna milxa vani i.e static
//i.e yesma instance(obj ko ke role hudaina)

// class profile{
//     constructor(name,age,income){
//         this.name = name;
//         this . age = age;
//         this . income = income;
//     }
//     static sortByAge(user1, user2){
//         return user1.age - user2.age;

//     }
// }

// const user1 = new profile("Ram", 23, 1233);
// const user2 = new profile("hari", 16, 120);
// const user3 = new profile("shyam", 7, 14);

// const users=[user1, user2, user3];
// users.sort((profile.sortByAge));
// console.log(users);


// class circle{
//     constructor (radius){
//         this. radius = radius;
//     }
//     //property
//     static defaultValue = 3;

//     //instace method

// calculate (){
//     return Math.PI*this.radius *this.radius;
// }


//     //static method
//     static compareBY(rad1, rad2){
//         return rad1 - rad2;

//     }
// }

// const rad1 = new circle(8);
// const rad2 = new circle(5);
// console.log(rad1, rad2);
// console.log(circle.defaultValue);// propety
// console.log(circle.compareBY(9,5));//  static method call
// console.log(rad1.calculate()); // instance method

//single therad synchronous= js behaviour


//stack in JS
//-stack is data structure that stores a collection of items in a last in 1st out order

//execution context & executiom stack
//fuction jaba call garxam teti bela 2 ta stack banxa exectution stack and global execution stack
//in su,,art an excetutuiom context represenrs the env in whicj the js code
//is executed amd yje excetuin stack keep tracks of the fun calls


// let i = 8;
// let j =7;
// function sum(a,b){
//     return a+b ;
// }

// const result = sum(i,j);
// console.log(result);

//diff between synchronous and asynchronous programming in js


//asynchronous
// console.log("hello world!");
// console.log("hey harka dai!");

// setTimeout(()=>{
//     console.log("Ruko jara sabar karo")
// },5000)

// setTimeout(()=>{
//     console.log("ma tiktok chalauxu")
// },2000)
// console.log("k xa");

//IMP FROM HRER



//asychronuous garney way
//-callback
//-promises
//-string oe

//yeuta fun lai if arko fun ma as a argument pass garna milxa vani we called it callback.
//tyo arg pass vako fun lai vanxa
//---code repeat hunaaa;
//callback  hell== if call stack not used properly then we call it callsatckhell
//callback hell ko rescue --promises in JS
//-two type of promise--resolve- sucess, --reject - failure
//simply promises is js obj which manages asynchronous task in JS
//
//situation in which if we dont used

// alert("hello world");
// console.log("task1");
// console.log("task2");
// console.log("task3");
// console.log("task4");

// function sum(a,b,callback){
//     const result = a+b;
//     callback( result);
// }
// function added(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText = result; 
// }
// sum(4,8, added);
//
// let arr=[1 ,2 ,13 ,4 ,5,8,3];
// function calculations(arr = [], callback){
//     let ans = [];

//     for(i=0; i< arr.length; i++){
//         const element = callback(arr[i])
//         ans.push(element);
//     }
//     console.log(ans);
// }
// calculations(arr, (a)=>a+10);
// calculations(arr, (a)=>a-10);
// calculations(arr,(a)=> a*10);
// calculations(arr, (a)=>a/10);

//promise- js obj
//resolve - then
//reject - catch
// const a = new Promise ((resolve , reject)=>{
//     let sucess = false;
//     if(sucess) resolve("promise fulfilled");
//     else reject("technical error");
// });
// a.then((parameter)=> console.log(parameter)).catch((error) => 
// console.log(error));

// console.log("hell0 world");
// setTimeout(()=>{
//     console.log("harka dai");
// }, 2000);


// function fetchData(){
//     fetch("https://catfact.ninja/fact").then((res)=> res.json()).then((data)=>console.log(data)).catch((error)=> console.log(error));
// }
// fetchData();
// console.log("haina k ho yesto yo");

// let arr =[];
// const fetchData=()=>{
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{

//             arr.push({name:"RAMEY", age:23})
//             if(arr.length>0)resolve("data fetched")
//             else reject("some technical error")
//         }, 2000)
//     });
// };

// fetchData()
// .then((message)=> console.log(message))
// .catch((error)=> console.log(error)).finally(()=> console.log("Dubai tira MOH"));

// fetch api
//-- due to help of promise we can use fetch api
//--used


//json -- object of object

//json formatter extension...
//free api no key. & open in new tab

//how to do fetch API
//  const url = "https://catfact.ninja/fact";
// const h1 = document.querySelector("h1");
// const fetchData = ()=>{
//     fetch(url)
//     .then((res)=> res.json())
//     .then((data)=>(h1.innerText = data.fact))
//     .catch((error)=>console.log(error));
// };
// fetchData();

//async & await in JS
//--better than previous

// const fetchData =async ()=>{
// try {
//     const res = await fetch(url);
//     const data = await res.json();
//     h1.innerHTML = data.fact;
// } catch (error) {
//     console.log(error)
    
// }
// };
// fetchData();