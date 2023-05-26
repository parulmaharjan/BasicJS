//OOP in JS
//constructor function
//constructor fun ma this ra new use hunxa
//constructor fun ko obj banauna we use new keyword
//prperty ma function use garyo vani we call in method
function BankAc(customerName,balance =0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
};
//     this.deposit = function(amount){
//         this.balance +=amount;
//     };

//     this.withDraw = function(amount){
//         this.balance-=amount;
//     }
// }

// const sitaAc = new BankAc("sita",1000);
// const gitaAc = new BankAc("gita",3000);
//BankAc.prototype.deposit= function(amount){
   // this.balance +=amount;

//};

//BankAc.prototype.withDraw =function(amount){
//this.balance -=amount;
//};
// sitaAc.deposit(6000);
// gitaAc.withDraw(2000);
// console.log(sitaAc);
// console.log(gitaAc);
console.log(BankAc.prototype);
// const ramac = new BankAc ("ram",23333);
// const shyamac = new BankAc ("shyam",2300);
// console.log(ramac);
// console.log(shyamac);
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

// const myForm =document.querySelector("#myForm");
// const customerName = document.querySelector("#CustomerName");
// const balance = document.querySelector("#Balance");
// const depositForm = document.querySelector("#depositForm");
// const acnum = document.querySelector("#AccountNumberr");
// const blnc = document.querySelector("#Balancee");

// let accounts =[];

// myForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const Newaccount = new BankAc(customerName.value , +balance.value);
//     accounts.push(Newaccount);
//     console.log(accounts)});

//     depositForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     const ac = accounts.find(
//         (item)=> item.accountNumber === +acnum.value
//     );
//     if (ac){
//         ac.deposit(+blnc.value)
//         console.log(accounts);
//     }

// })    




// js function ma proprty ma js ley yeuta property add gardina ieoprototype
//protoytypr is empty obj