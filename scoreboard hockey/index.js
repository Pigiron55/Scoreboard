// let score1 = document.getElementById("score1-btn")
// let score2 = document.getElementById("score2-btn")
// let score3 = document.getElementById("score3-btn")
// let periodButton = document.getElementById("period-btn")

let homeCount = 0
let guestCount = 0
let periodCount = 1

function homeOne() {
    homeCount += 1
    homeScore.textContent = homeCount
    
}

function homeTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
    
}

function homeThree() {
    homeCount += 3
    homeScore.textContent = homeCount
    
}

function guestOne() {
    guestCount += 1
    guestScore.textContent = guestCount
    
}

function guestTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
    
}

function guestThree() {
    guestCount += 3
    guestScore.textContent = guestCount
    
}

function reset() {
    homeCount = 0
    guestCount = 0
    periodCount = 1
    
    guestScore.textContent = 0
    homeScore.textContent = 0
    whichPeriod.textContent = 1
    
}

function period() {
    periodCount += 1
    whichPeriod.textContent = periodCount
    
}