 // random color
document.getElementById("colorBtn").addEventListener("click", function () {
    const randomColor = '#' + Math.random().toString(16).slice(2, 8);
    document.body.style.backgroundColor = randomColor;
});
//Date
const date = new Date().toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" })
    .replace(',', ' ');
    const parts = date.split(' '); 
document.getElementById("date").innerHTML = parts[0] + "<br>" + parts.slice(1).join(' ');


// Adding  Clear History button
document.getElementById("clearHistoryBtn").addEventListener("click", function() {
   
    const activityLog = document.getElementById("activityLog");     
    activityLog.innerHTML = ""; 
    alert("Activity log cleared!");
});

//another page
document.getElementById("qa-btn").addEventListener('click',function()
{
   window.location.href="./qa.html"
})

