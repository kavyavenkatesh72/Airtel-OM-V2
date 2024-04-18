let empolyees=[{id:101,Name:"Rahul",Salary:2000},
                {id:102,Name:"sonia",Salary:3000}]

 let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    let flag=true;
    flag?resolve("Data inserted"):reject("fail")
    empolyees.push(emp)
},4000)

    })
 }
 let displayEmployee=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of empolyees){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.Name}</td>
            <td>${emp.Salary}</td>
            </tr>`
        }
        document.getElementById("table-body-data").innerHTML=rows
    },2000)

    
 } 
 
 createEmployee({'id':103,'Name':"priya",Salary:4000})
 .then((msg)=>{
    console.log(msg)
    displayEmployee()
 })
 .catch((err)=>{
    console.log(err)
 })