class Account{
    acc_bal=0;
    deposit_Amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
}
let a1=new Account()
console.log(a1)
a1.deposit_Amount(500)
a1.deposit_Amount(50)
console.log(a1)

let a2=new Account()
console.log(a2)
a2.deposit_Amount(15000)
a2.deposit_Amount(10000)
console.log(a2)