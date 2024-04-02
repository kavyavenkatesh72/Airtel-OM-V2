class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    open_Account(){
        console.log("Amount opened successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited successfully")
    }
    withdrawn_Amount(){
        console.log("Insufficient Bal")
    }
    get_Bal(){
        console.log("server busy")
    }
    close_Amount(){
        console.log("...Add more funds to close")
    }
}
let a1=new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdrawn_Amount()
a1.get_Bal()
a1.close_Amount()

