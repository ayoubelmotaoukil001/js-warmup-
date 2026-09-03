const temperatures = [-5, 10, 22, 34];

function celsiusVersFahrenheit(celsius) 
{
    return celsius * 9/5 +32 ;
}

function decrireTemperature(celsius)
{   
    if(celsius < 10)
{
        return "froid" ;
    }
else if (celsius >= 10 && celsius <= 25)
{
    return "doux" ;
}
else{
    return "chaud"; 
}    
}

for (let  i  =0 ; i < temperatures.length  ; i++)
{
    const temp = temperatures[i] ;
    console.log(`celsiusVersFahrenheit(${temp}) -> ${celsiusVersFahrenheit(temp)}`) ;
    console.log(`decrireTemperature(${temp}) -> ${decrireTemperature(temp)}`) ;
}
