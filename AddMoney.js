    const validPin = 1234
    const transactionData = []

// add money feature 
document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
        
    if (addAmount<=0){
        alert("invalid amount")
        return;
    }

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

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)

})





// cashout feature 
document.getElementById("cashsout-btn").addEventListener("click", function (e) {
    e.preventDefault()


const cashOutAmount = parseInt(document.getElementById("cashout-amount").value)
const availableBalance = parseInt(document.getElementById("available-balance").innerText)

if (cashOutAmount <= 0 || cashOutAmount> availableBalance){
        alert("invalid amount")
        return;
    }

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

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)

})




// transaction feature 
document.getElementById("transaction-button").addEventListener("click", function(){
    const transactionParent = document.getElementById("transaction-parent")
         transactionParent.innerText = ""

    for (const data of transactionData){
        const div = document.createElement("div")
        div.innerHTML = ` 
           <div class=" bg-white rounded-xl flex justify-between items-center p-2" >
              <div class="flex items-center gap-4">
                <div class=" p-3 rounded-full bg-[#f4f5f7]">
                    <img src="assets/wallet1.png" class="mx-auto" alt="">
                </div>
                <div >
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        `
        transactionParent.appendChild(div)

    }
})




// Active button features 

document.getElementById("add-button").addEventListener("click", function(){
    
    const formBtns = document.getElementsByClassName("form-btn")
     
    for(btn of formBtns){

        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }

    document.getElementById("add-button").classList.remove("border-gray-300")

    document.getElementById("add-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

})




document.getElementById("cashout-button").addEventListener("click", function(){
    
    const formBtns = document.getElementsByClassName("form-btn")
     
    for(btn of formBtns){

        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
           btn.classList.add("border-gray-300")
    }

    document.getElementById("cashout-button").classList.remove("border-gray-300")

    document.getElementById("cashout-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

})




document.getElementById("getbonus-button").addEventListener("click", function(){
    
    const formBtns = document.getElementsByClassName("form-btn")
     
    for(btn of formBtns){

        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
           btn.classList.add("border-gray-300")
    }

    document.getElementById("getbonus-button").classList.remove("border-gray-300")

    document.getElementById("getbonus-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

})




document.getElementById("transfer-button").addEventListener("click", function(){
    
    const formBtns = document.getElementsByClassName("form-btn")
     
    for(btn of formBtns){

        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
           btn.classList.add("border-gray-300")
    }

    document.getElementById("transfer-button").classList.remove("border-gray-300")

    document.getElementById("transfer-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

})




document.getElementById("paybill-button").addEventListener("click", function(){
    
    const formBtns = document.getElementsByClassName("form-btn")
     
    for(btn of formBtns){

        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
           btn.classList.add("border-gray-300")
    }

    document.getElementById("paybill-button").classList.remove("border-gray-300")

    document.getElementById("paybill-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

})



document.getElementById("transaction-button").addEventListener("click", function(){
    
    const formBtns = document.getElementsByClassName("form-btn")
     
    for(btn of formBtns){

        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
           btn.classList.add("border-gray-300")
    }

    document.getElementById("transaction-button").classList.remove("border-gray-300")

    document.getElementById("paybill-button").classList.add("border-[#0874f2]", "bg-[#0874f20d]")

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