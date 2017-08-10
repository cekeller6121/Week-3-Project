console.log("revised.js file connected");

// *** this is a new js file- I'm going to do my best to make this app a little bit lighter than I did on week 3 of The Iron Yard ***

var calcButtons = document.querySelectorAll(".btn-success");
for (i = 0; i < calcButtons.length; i++) {
        calcButtons[i].addEventListener("click", function(event) {
              console.log(event.target.value);
              document.getElementById('output').innerHTML = event.target.value;
        });
};













// *** intenional whitespace ***
