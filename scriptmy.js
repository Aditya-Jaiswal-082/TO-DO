function AddNew()
{
    let li = document.getElementById("newtask");
    let taskvalue = li.value.trim();

    if (taskvalue === "") {
        alert("Please enter a task");
        return;
    }
    
    let a = document.createElement("a");
    a.innerText = taskvalue;


// checkthrough usin the .completed class in the css 
    a.addEventListener("click", function() {
        a.classList.toggle("completed");
    });



// remove the item from the list
    let rmbtn = document.createElement("button");
    rmbtn.innerText = "D";
    rmbtn.className = "rmbtn";

    rmbtn.addEventListener("click" , function()
{
    a.remove();
});
a.appendChild(rmbtn);

// add the task to the ul list
    document.getElementById("list").appendChild(a);

//clear the input area 
    li.value = ""; 

    


}