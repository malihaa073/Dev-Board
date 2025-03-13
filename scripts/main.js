document.getElementById("parentNode").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default behavior

  // Check if the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    alert("Board Updated Successfully");

    // getting remaining task quantity
    const taskQuantity = document.getElementById("task").innerText;
    const converseTaskQuantity = parseInt(taskQuantity);

    //getting Completed task
    const taskComplete = document.getElementById("finishTask").innerText;
    const converseTaskComplete = parseInt(taskComplete);
   //calculation
    const result = converseTaskQuantity - 1;
    const updateTaskComplete = converseTaskComplete + 1;
   //update
    document.getElementById("task").innerText = result;
    document.getElementById("finishTask").innerText = updateTaskComplete;

    // Disable the clicked button
    const button = event.target;
    button.disabled = true;
    button.classList.add("cursor-not-allowed", "opacity-20");

    // Task finished condition
    if (result === 0) {
      setTimeout(() => {
        alert("Congratulations !! All the works have finished");
      }, 100);
    }

   // Get the parent card div (the main container of the button and h3)
   const cardDiv = event.target.closest(".p-3");

   // Find the h3 tag inside this card div
   const h3 = cardDiv.querySelector("h3");

   // Ensure the h3 tag exists
   if (h3) {
     // Log the activity
     const currentTime = new Date().toLocaleTimeString();
     const activityLog = document.getElementById("activityLog");
     const newActivity = document.createElement("p");
     newActivity.classList.add("mt-4", "pl-4");
     newActivity.innerText = `You have completed the task "${h3.innerText}" at ${currentTime}\n\n`;
     activityLog.appendChild(newActivity);
   } else {
     console.error("H3 element not found in the card!");
   }
   
  }
});


