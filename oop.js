//OOP in JS
//constructor function
//constructor fun ma this ra new use hunxa
//constructor fun ko obj banauna we use new keyword
//prperty ma function use garyo vani we call in method
// function BankAc(customerName,balance =0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;

//     this.deposit = function(amount){
//         this.balance +=amount;
//     };

//     this.withDraw = function(amount){
//         this.balance-=amount;
//     }
// }
// const RamAc = new BankAc("Ram",6000);
// const HariAc = new BankAc("Hari");
// const SitaAc = new BankAc("Sita",10000);
//HariAc.balance= 7000; //not suitable way so we use encapsulation -setter and getter

// RamAc.deposit(6000);
// RamAc.withDraw(5000);

// HariAc.deposit(50000);
// HariAc.withDraw(5000);

// SitaAc.deposit(100);
// SitaAc.withDraw(10000);
// console.log(RamAc);
// console.log(HariAc);

//console.log(SitaAc);
const myForm =document.querySelector("#myForm");
const customerName = document.querySelector("#CustomerName");
const accountNumber = document.querySelector("#AccountNumber");
const balance = document.querySelector("#Balance");

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
});