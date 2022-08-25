//assigned class to all text area elements to match with css styling
var textAreaEls = $('textarea');
for(var i=0; i<textAreaEls.length; i++) {
    textAreaEls[i].setAttribute("class", "description");
}

//set current date to always display at the top
var currentDayEl = $('#currentDay');
currentDayEl.text(moment().format('dddd, MMMM Do'));

//assigns text content and time value to each time block
var timeBlocks = $('.hour');
var num = 9;
for(i=0;i<timeBlocks.length;i++) {
    timeBlocks[i].value = moment().hour(num).format("h");
    timeBlocks[i].textContent = moment().hour(num).format("h A");
    num++;
}

//styles time blocks based on relation to current time
//this is not working
var currentTime = moment();

for(i=0; i<timeBlocks.length; i++) {
    if (currentTime > timeBlocks[i].value) {
        var targetEl = $(timeBlocks[i]).parent().children().eq(1);
        targetEl.addClass("past");
    }
    else if(currentTime < timeBlocks[i].value) {
        var targetEl = $(timeBlocks[i]).parent().children().eq(1);
        targetEl.addClass("future");
        console.log("future");
    }
    else {
        var targetEl = $(timeBlocks[i]).parent().children().eq(1);
        targetEl.addClass("present");
        targetEl.text("Current hour");
    }
}

//added icon to all save buttons
var saveBtnEl = $('.saveBtn');
for(var i=0; i<saveBtnEl.length; i++) {
    var icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-calendar-plus");
    saveBtnEl[i].appendChild(icon);
}

//need to make these var names easier to understand
//saves event to local storage when user enters an event in any of the text boxes
function saveEvent(event) {
    event.preventDefault();
    var grandParent = $(event.target).parent().parent();
    var secondChild = grandParent.children().eq(1);
    var firstChild = secondChild.children().eq(0);
    var input = firstChild.val().trim();
    var firstKid = grandParent.children().eq(0);
    var time = grandParent.attr("id");
    console.log(time);
    //change this so it says am/pm
    $("#appt-message").text("Event saved: " + input + " at " + time);
    //save to local storage
    localStorage.setItem(time, input);
}

//listens for click on any button
//maybe extend so listener on the icons too
var containerEl = $('.container');
containerEl.on('click', '.saveBtn', saveEvent);

//need to retrieve from local storage when page loads
//this is displaying key not value
function loadEvent() {
    var hour9 = localStorage.getItem("9");
    $('#9 .description').val(9);
}

loadEvent();