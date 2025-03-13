/*function getInnerText(id)
{
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    const result = convertedValue -1;
    console.log("hii")
    return result;
    //document.getElementById(id).innerText=result;
}
function  getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue =parseInt(value);
    return convertedValue;
}*/
document.getElementById("backBtn").addEventListener('click',function(event)
{
    event.preventDefault(); 
    history.back();
})