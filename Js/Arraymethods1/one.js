var a=['kavya','priya','lashika','santhosh']
for(var i=0;i<=a.length-1;i++)
{
    console.log(a[i])
}

var i=0;
while(i<=a.length-1)
{
    console.log(a[i])
    i++
}

var i=0;
do{
    console.log(a[i])
    i++
}while(i<=a.length-1)

for(   a of a){
    console.log(a)
}