/* .js files add interaction to your website */

var facts = ["In 2020, California wildfires killed 33 people and destroyed 10,488 structures.",
             "From 2019 to 2020, the number of wildfires in California increased by 26.2%.",
             "Most (80-95%) wildfires are started by humans, but they can also be started by lightning strikes.",
             "Carbon monoxide is present in wildfire smoke, making firefighters at risk of high levels of this dangerous chemical.",
             "In 2020, wildfires in the United States burned 8,889,297 acres.",
             "Climate change leads to a rise in temperature, making the land more dry. This increases the likelihood of fires and makes it easier for them to spread."];

factButton=document.getElementById("factGenButton");
factButton.addEventListener("click",displayFact);
factText=document.getElementById("factGenText");

function displayFact(){
  factText.innerHTML=facts[Math.floor((Math.random() * 5))];
}



