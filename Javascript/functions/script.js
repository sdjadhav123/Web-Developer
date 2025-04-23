//simple function

function sum ()
{
    let a = 10, b = 20;
    console.log(a+b)
}

sum() //30
function sum2(a,b)
{
    console.log(a+b)
}
sum2("sumit",2)
sum2("sonu",2)

function sum3(a,b,c)
{
  if(c)
  {
    console.log(a+b)
  }
  else{
    console.log("not valid")
  }
}
sum3(5,4,9)
sum3(5,4,false)

function sum4(a , b)
{
    return a+b;
}
let res = sum4(5 , 5)
console.log(res)

function sum5 (a,b)
{
    console.log(a+b)
}
sum(40)

function sum6(a=4 , b=5)
{
    console.log(a+b)
}
sum6(16)
sum6()

//default tax in system is 5% unless actual  tax  mentioned
function calculateTax(cost, tax = 5)
{
  let res = (tax/100)*cost
  console.log(cost + res)
}
calculateTax(300)

function sum7(a=10, b=3, c=5)
{
  console.log(a+b+c)
}