// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let peopleCount = 0

function increment(){
    peopleCount = peopleCount + 1
    console.log(peopleCount)
    countEl.innerText = peopleCount
}

function save(){
    let countSave = " " + peopleCount + " - "
    console.log(peopleCount)
    saveEl.innerText += countSave
}






