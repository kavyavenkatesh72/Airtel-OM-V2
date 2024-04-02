let employees=[
    {id:101,name:'kavya',sal:45000},
    {id:102,name:'soniya',sal:55000},
    {id:102,name:'soniya',sal:55000},
{id:102,name:'soniya',sal:55000},
{id:102,name:'soniya',sal:55000},
{id:102,name:'soniya',sal:55000},

]
function displayEmpData(){
    let rows=""
    for(emp of employees){
        row=row+`<tr>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.sal}</td>
        </tr>`
    }
    document.getElementById('t_Data').innerHTML=rows
}