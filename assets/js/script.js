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
    timeBlocks[i].value = num;
    timeBlocks[i].textContent = moment().hour(num).format("h A");
    num++;
}

//styles time blocks based on relation to current time
var currentTime = parseInt(moment().hours());

for(i=0; i<timeBlocks.length; i++) {
    if (currentTime > timeBlocks[i].value) {
        var targetEl = $(timeBlocks[i]).parent().children().eq(1);
        targetEl.addClass("past");
    }
    else if(currentTime < timeBlocks[i].value) {
        var targetEl = $(timeBlocks[i]).parent().children().eq(1);
        targetEl.removeClass("past");
        targetEl.addClass("future");
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
    var time = grandParent.attr("id");
    console.log(time);
    $("#appt-message").text("Event saved: " + input + " at " + time);
    localStorage.setItem(time, input);
}

//listens for click on any button
//maybe extend so listener on the icons too
var containerEl = $('.container');
containerEl.on('click', '.saveBtn', saveEvent);

//retrieves events saved to local storage
function loadEvents() {
    var hour9 = localStorage.getItem("9AM");
    $('#9AM .description').val(hour9);
    var hour10 = localStorage.getItem("10AM");
    $('#10AM .description').val(hour10);
    var hour11 = localStorage.getItem("11AM");
    $('#11AM .description').val(hour11);
    var hour12 = localStorage.getItem("12PM");
    $('#12PM .description').val(hour12);
    var hour1 = localStorage.getItem("1PM");
    $('#1PM .description').val(hour1);
    var hour2 = localStorage.getItem("2PM");
    $('#2PM .description').val(hour2);
    var hour3 = localStorage.getItem("3PM");
    $('#3PM .description').val(hour3);
    var hour4 = localStorage.getItem("4PM");
    $('#4PM .description').val(hour4);
    var hour5 = localStorage.getItem("5PM");
    $('#5PM .description').val(hour5);
}

//called when page loads
loadEvents();