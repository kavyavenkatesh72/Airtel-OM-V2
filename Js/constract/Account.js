class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    constructor(id,name,amount){
        this.acc_Id=id;
    this.acc_Name=name;
this.acc_Bal=amount;
    }
    open_acc(){
        console.log("Account Successfully Opened")
    }
    deposit_amount(amount){

        this.acc_Bal=this.acc_Bal+amount
    }
    get_Bal(){
        return this.acc_Bal;

    }
    Withdraw_details(amount){
        this.acc_Bal=this.acc_Bal-amount
    }
    close_acc(){}
    
    
}
let a1=new Account(101,"kavya",1000)
console.log(a1)
a1.deposit_amount(200)
console.log(a1)
a1.Withdraw_details(200)
console.log(a1)
console.log(a1.get_Bal())



let a2=new Account(102,"priya",2000)
console.log(a2)
a2.deposit_amount(200)
console.log(a2)
a2.Withdraw_details(200)
console.log(a2)
console.log(a2.get_Bal())