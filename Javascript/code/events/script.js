function fun (e)
{
    const inp = e.target.value;
    console.log(inp)
}
function submitLogic (e)
{
    e.preventDefault()
    console.log(e.target[0].value)
}