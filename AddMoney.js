    const validPin = 1234

// add money feature 
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const addPin = parseInt(document.getElementById("add-pin").value)
    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if (accountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }

    if (addPin !== validPin) {
        alert("Please provide valid pin number")
        return;
    }


    const totalNewAvailableBalance = addAmount + availableBalance
    document.getElementById("available-balance").innerText = totalNewAvailableBalance

})





// cashout feature 
document.getElementById("cashsout-btn").addEventListener("click", function (e) {
    e.preventDefault()


const cashOutAmount = parseInt(document.getElementById("cashout-amount").value)
const availableBalance = parseInt(document.getElementById("available-balance").innerText)
const cashoutPin = parseInt(document.getElementById("cashout-pin").value)
const accountNumber = document.getElementById("cashout-account-number").value

if (accountNumber.length < 11) {
        alert("Please provide valid account number")
        return;
    }

    if (cashoutPin !== validPin) {
        alert("Please provide valid pin number")
        return;
    }

     const totalNewAvailableBalance = availableBalance - cashOutAmount
    document.getElementById("available-balance").innerText = totalNewAvailableBalance

})






// toggling feature 

// for add money 
document.getElementById("add-button").addEventListener("click", function(){
    
    document.getElementById("cashout-parent").style.display = "none"
    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("paybill-parent").style.display = "none"
    document.getElementById("bonus-parent").style.display = "none"

    document.getElementById("add-money-parent").style.display = "block"
})


// for cashout 
document.getElementById("cashout-button").addEventListener("click", function(){
    
    document.getElementById("cashout-parent").style.display = "block"

    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("paybill-parent").style.display = "none"
    document.getElementById("bonus-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
})


// for transfer 
document.getElementById("transfer-button").addEventListener("click", function(){
    
    document.getElementById("transfer-parent").style.display = "block"

    document.getElementById("cashout-parent").style.display = "none"
    document.getElementById("paybill-parent").style.display = "none"
    document.getElementById("bonus-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
})


// for bonus 
document.getElementById("getbonus-button").addEventListener("click", function(){
    
    document.getElementById("bonus-parent").style.display = "block"

    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("paybill-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cashout-parent").style.display = "none"

})


// for paybill
document.getElementById("paybill-button").addEventListener("click", function(){

    document.getElementById("paybill-parent").style.display = "block"
    
    document.getElementById("cashout-parent").style.display = "none"
    document.getElementById("transfer-parent").style.display = "none"
    document.getElementById("bonus-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "none"
})