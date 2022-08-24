//assigned class to all text area elements
var textAreaEls = $('textarea');
for(var i=0; i<textAreaEls.length; i++) {
    textAreaEls[i].setAttribute("class", "description");
}

//set current date to always display at the top
var currentDayEl = $('#currentDay');
currentDayEl.text(moment().format('ll'));

//colors time blocks based on if they are past, present, or future
var currentTime = moment();
var timeBlocks = [
    moment().hour(9),
    moment().hour(10),
    moment().hour(11),
    moment().hour(12),
    moment().hour(13),
    moment().hour(14),
    moment().hour(15),
    moment().hour(16),
    moment().hour(17),
]

//need finish this function
for(var i=0; i<timeBlocks.length; i++) {
    if (currentTime.isBefore(timeBlocks[i])) {
        console.log("before");
        //assign rows to class future
    }
    else if(timeBlocks[i].isBefore(currentTime)) {
        console.log("after");
        //assign rows to class past
    }
    else {
        console.log("during");
        //assign row to class present
    }
}

//added icon to all save buttons
var saveBtnEl = $('.saveBtn');
for(var i=0; i<saveBtnEl.length; i++) {
    var icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-calendar-plus");
    saveBtnEl[i].appendChild(icon);
}

//event saves to local storage when the save button is pressed
//so far only writing this for top row need to apply to all rows
input = document.querySelector("#nine");

saveBtnEl.on("click", function() {
    console.log("save");
    console.log(input.value);
    localStorage.setItem("nine", input.value);
})