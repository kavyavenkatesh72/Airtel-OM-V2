class Account{
    acc_Bal=0;
    deposit_Details(){
        console.log("Insufficient Balance")
    }
}
let a1=new Account();
console.log(a1);
let a2=new Account();
a2.deposit_Details();