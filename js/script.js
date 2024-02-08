let inputName = document.querySelector(".input__name")
let inputColor = document.querySelector(".input__color")
let inputBirth = document.querySelector(".date__birth")
let nameError = document.querySelector(".name__error")
let dateError = document.querySelector(".date__error")


// _______________________________card

let cardOutput1 = document.querySelector(".card__output1")
let cardOutput2 = document.querySelector(".card__output2")
let cardOutput3 = document.querySelector(".card__output3")
let cardOutput4 = document.querySelector(".card__output4")
let cardOutput5 = document.querySelector(".card__output5")




// ___________________________________card

let submitBtn = document.querySelector(".card__submit")

let maskBtn = document.querySelector(".mask__btn")
let markBtn= document.querySelector(".mark__btn")
let jeffBezos = document.querySelector(".jeffbezos__btn")
let susanWojcicki = document.querySelector(".susanWojcicki__btn")
let billGates = document.querySelector(".billgates__btn")

let profileName = document.querySelector(".profile__name")
let  cardDate = document.querySelector(".card__date")



submitBtn.addEventListener("click", function(){
  if (Boolean(inputName.value)) {
       nameError.innerHTML = ""


  }else{
    nameError.innerHTML = "please enter your name"
  }


})


maskBtn.addEventListener("click", function(){

if (cardOutput1.value) {
    cardOutput1.style.display = "none"
}else{
  cardOutput1.style.display = "block"

}
  
})

markBtn.addEventListener("click", function(){
  

if (cardOutput2.value) {
  cardOutput2.style.display = "block"

}else{
  cardOutput2.style.display = "none"

}


})