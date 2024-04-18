let goToGoa=( success,failure )=>{
    Acc_Bal=5000;
    if(Acc_Bal>20000)
    {
        success("goto Goa");
    }
    else{
        failure ("goto prostack");
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(error)=>{
    console.log(error)
})