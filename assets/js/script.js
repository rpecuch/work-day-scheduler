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

//need to make these var names easier to understand
//saves event to local storage when user enters an event in any of the text boxes
function saveEvent(event) {
    event.preventDefault();
    //retrieve input from text area
    //retrieving input from the 1st child of the 2nd child of the target's grandparent
    var grandParent = $(event.target).parent().parent();
    var secondChild = grandParent.children().eq(1);
    var firstChild = secondChild.children().eq(0);
    var input = firstChild.val();
    //save to local storage
    //key needs to be time
    //time is the text content of the first child of the target's grandparent
    var firstKid = grandParent.children().eq(0);
    var time = firstKid.text();
    console.log(time);
    localStorage.setItem(time, input);
}

//listens for click on any button
var containerEl = $('.container');
containerEl.on('click', '.saveBtn', saveEvent);

//need to retrieve from local storage when page loads