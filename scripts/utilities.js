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
document.addEventListener("DOMContentLoaded", function () {
    const backBtn = document.getElementById("backBtn");

    if (backBtn) {
        backBtn.addEventListener("click", function () {
            window.history.back(); // Navigates to the previous page
        });
    }
})