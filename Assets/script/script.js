
// Open Day Planner and Day and Time is Display at top

let currentDay = document.getElementById('currentDay');
let DateTime = luxon.DateTime;
let today = DateTime.local()
let f = { month: 'long' , day :'2-digit'};
let m = today.get('month');
let tz = today.zoneName;
currentDay.textContent = tz;
let newDt = today.set({month: 12});
currentDay.textContent = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
console.log(today.toISO());



// function each hour is colorblock /time block is color coded indicating 
//  -Past(Gray) Present (Red)  -Future(Green)

var timeblock = $(".hour");
var now = DateTime.local().c.hour;

$.each(timeblock , function (hour) {
  var hourId = parseInt($(this).attr("id"));
    console.log(now,hourId)
  if (hourId === now) {
      $(this).addClass("present");
  } else if(hourId < now) {
    $(this).addClass("past"); 
} else if(hourId > now) {
    $(this).addClass("future");
}

});


// function of Time block -click block.
// Enter event -click save button for that insert time block.
// Event  is sav e on local storage.


$(".saveBtn").on("click" , function(){
    var hourclick = $(this).attr("id")
    console.log($(this) [0].parentElement.previousElementSibling.value)
})


        $ (document).ready(function () {
          
          })
      
     $("9am").children("innertext").val(localStorage.getItem("9am"));
     $("10am").children("innertext").val(localStorage.getItem("10am"));
     $("11am").children("innertext").val(localStorage.getItem("11am"));
     $("12pm").children("innertext").val(localStorage.getItem("12pm"));
     $("1pm").children("innertext").val(localStorage.getItem("1pm"));
     $("2pm").children("innertext").val(localStorage.getItem("2pm"));
     $("3pm").children("innertext").val(localStorage.getItem("3pm"));
     $("4pm").children("innertext").val(localStorage.getItem("4pm"));
     $("5pm").children("innertext").val(localStorage.getItem("5pm"));

     

        // function nineAM() { 
        //     var input_textarea = document.querySelector("#input9am");
        //     console.log(nineAM)
        //     var output_div = document.querySelector("#input9am");
           
        //     output_div.textContent = localStorage.getItem("content");
        //     input_textarea.value = localStorage.getItem("content");

        //     function displaytext() { 
        //       localStorage.setItem("content" , input_extareaa.value);
        //         output_div.textContent = input_textarea.value;
        //     }
        // }

        // function tenAM() { 
        //     var input_textarea2 = document.querySelector("#input10am");
           
        //     var output_div2 = document.querySelector("#input10am");
           
        //     output_div2.textContent = localStorage.getItem("content2");
        //     input_textarea2.value = localStorage.getItem("content2");

        //     function updateOutput2() { 
        //          localStorage.setItem("content2", input_textarea2.value);
        //          output_div2.textContent = input_textarea2.value;
        //     }
        // }



