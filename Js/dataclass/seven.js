class Account{
    acc_Bal=0;
    deposit_amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }

get_Bal(){
    return this.acc_Bal;
}
withdrawl_Amount(amount){
    this.acc_Bal=this.acc_Bal-amount
}
}

let a1=new Account()
a1.deposit_amount(500)
a1.deposit_amount(50)
console.log(a1)
a1.withdrawl_Amount(15)
console.log(a1)
console.log(a1.get_Bal())

