//understand moment.js

//turn middle boxes grey if time is passed by setting class to past

//turn middle box red if current hour by setting class to present

//turn middle boxes green if in the future by setting class to future

//allow user to create an event by clicking on a textarea

//event saves to local storage when the save button is pressed

saveBtnEl = $('.saveBtn');
//event listener works on all buttons
saveBtnEl.on("click", function() {
    console.log("save");
})