class Account{
    acc_Name;
    acc_Email;
    constructor(name,email){
        this.acc_Name=name;
        this.acc_Email=email;    
}
}
class SA extends Account{
    acc_id;
    acc_Bal=0;
    min_acc=500;
    constructor(id,name,email,amount)
    {
        super(name,email)
        this.acc_id=id;
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_acc;
    }
}
class CA extends Account{
    min_Bal=10000;
    acc_Id;
    acc_Bal;
    constructor(id,name,email,amount){
        super(name,email)
        this.acc_Id=id;
        this.acc_Bal=amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}
let sa1=new SA(101,'kavya','kavya@gmail.com',1000)
console.log(sa1)
console.log(sa1.get_Bal())
let ca1=new CA(102,'priya','priya@gmail.com',5000)
console.log(ca1)
console.log(ca1.get_Bal())