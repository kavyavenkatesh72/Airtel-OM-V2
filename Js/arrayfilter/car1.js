let cars=[
    {model:'Swift',brand:'Maruthi', price:800000, color:"Red"},
    {model:'Fortuner',brand:'Toyota', price:4800000, color:"Black"},
    {model:'Seltos',brand:'Kia', price:2100000, color:"Red"},
    {model:'x1',brand:'BMW', price:5800000, color:"White"},
    {model:'Nexon',brand:'Tata', price:1500000, color:"Yellow"},
    {model:'Discovery',brand:'RR', price:5800000, color:"Green"},
    {model:'Tiago',brand:'Tata', price:400000, color:"Red"},
    {model:'Scorpio',brand:'Mahindra', price:1800000, color:"Black"},
    {model:'Xuv700',brand:'Mahindra', price:2800000, color:"Balck"},

]
cars.filter((car)=>{
    if(car.color == "White")
    {
        console.log(car)
    }
})
let red_Cars=cars.filter((car)=>{
    return car.color=="Red"
})
console.log(red_Cars)

cars.filter((car)=>{
    if(car.price<500000)
    {
        console.log(car)
    }
})