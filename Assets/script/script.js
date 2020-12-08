// //* variables///
//  var input_texarea = document.querySelector("#input9am");
//  var output_div = document.querySelector("#input9am");
//  var saveBtn = document.querySelector("#button9am");





// Open Day Planner and Day and Time is Display at top

// var currentDay = DateTime.local()
// $("#currentDay").append(currentDay)

// var currentTime = DateTime.local()
// $("#currentTime").append(currentTime)


let lead = document.getElementById('lead');
lead.textContent = JSON.stringify(luxon.DATETIME_FULL);

let DateTime = luxon.DateTime;
let Today = DateTime.local()
let f = { month: 'long' , day :'2-digit'};
let m = today.get('month');
let tz = today.zoneName;
let newDt = today.set({month: 12});
lead.textContent = today.tolocaleString();
console.log(today.toISO());



// function each hour is colorblock /time block is color coded indicating 
//  -Past(Gray) Present (Red)  -Future(Green)

var now = DateTime.local().getHours();

function timeblockcolor() {
    if (now > 9) {
        $("#input9am").addClass("past");
    } else if (now >= 9 && now < 10) {
        $("#input9am").addClass("present");
    } else if (now < 9) {
        $("#input9am").addClass("future");
    {
    if (now > 10) {
        $("#input10am").addClass("past");
    } else if (now >= 10 && now < 11) {
        $("#input10am").addClass("present");
    } else if (now < 9) {
        $("#input10am").addClass("future");
    }







// function of Time block -click block.
// Enter event -click save button for that insert time block.
// Event  is sav e on local storage.

       var input_textarea = document.querySelector("#input9am");
       var output_div = document.querySelector("#input9am");
       var saveBtn = document.querySelector("#button9am");

       saveBtn.addEventListener("click" , updateOutput);
     
       output_div.textContent = localStorage.getItem("content");
       input_textarea.value = localStorage.getItem("content");

        updateOutput() 
            localStorage.setItem("content" , input_extareaa.value);

            output_div.textContent = input_textarea.value;
        }


        var input_textarea = document.querySelector("#input10am");
        var output_div = document.querySelector("#input10am");
        var saveBtn = document.querySelector("#button10am");

        saveBtn.addEventListener("click" , updateOutput2);
     
        output_div.textContent = localStorage.getItem("content2");
        input_textarea.value = localStorage.getItem("content2");

        updateOutput() 
        localStorage.setItem("content" , input_textarea2.value);

        output_div.textContent = input_textarea2.value;
        }


