class Parent{
    parent_name;
    constructor(name){
        this.parent_name=name;
    }
}
class Child extends Parent{
    child_name;
    constructor(name,p_name){
        super(name)
        this.child_name=p_name;
    }

}
let a1=new Child('kavya','priya')
console.log(a1)