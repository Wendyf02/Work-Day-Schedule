
 $ (document).ready(function () {

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

     var timeblock = $(".description");
     var now = DateTime.local().c.hour;
     

     $.each(timeblock , function (hour) {
     var hourId = parseInt($(this).attr("hour"));
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
      var hourclick = $(this).attr("id").split("button")[1];
      var userInput = ($(this) [0].parentElement.previousElementSibling.value);
      localStorage.setItem(hourclick, userInput);
  })
 
          

  
      $("#9am").val(localStorage.getItem("9am"));
      $("#10am").val(localStorage.getItem("10am"));
      $("#11am").val(localStorage.getItem("11am"));
      $("#12pm").val(localStorage.getItem("12pm"));
      $("#1pm").val(localStorage.getItem("1pm"));
      $("#2pm").val(localStorage.getItem("2pm"));
      $("#3pm").val(localStorage.getItem("3pm"));
      $("#4pm").val(localStorage.getItem("4pm"));
      $("#5pm").val(localStorage.getItem("5pm"));

    

})



  
        



