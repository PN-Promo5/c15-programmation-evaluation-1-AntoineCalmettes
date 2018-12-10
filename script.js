// Exercice 1

function graphicalInterface() { // I create the function graphicalInterface

  // Div overall
  let containerIdentity = document.createElement("div") // I create a div
  document.body.appendChild(containerIdentity) // I add my div in my body

  //let container for Form Identity
  let containerFormIdentity = document.createElement("form") //I create a form
  containerFormIdentity.action = "#"
  containerFormIdentity.method = "post"
  containerIdentity.appendChild(containerFormIdentity) // I add my form in my div overall

  // first paragraph for  containerIdentity
  let containerSectionIdentity = document.createElement("p") // I create a p
  containerFormIdentity.appendChild(containerSectionIdentity) // I add my p in my form

  //I create the label "Quel est votre prénom ?"
  let labelFirstName = document.createElement("label") // I create a label
  labelFirstName.textContent = "Quel est votre prénom ? " // I put a text on it.
  containerSectionIdentity.appendChild(labelFirstName) // I add my label in my p

  //I create the text input of FirstName
  let textInputFirstName = document.createElement("input") // I create a input
  textInputFirstName.type = "text" // I give it a text type
  textInputFirstName.required = true; //the text field must be filled in
  // textInputFirstName.minlength = "2" //that the field must contain at least 2 characters
  // textInputFirstName.maxlength = "50" // that the firld must contain at max 50 characters
  textInputFirstName.value = "" //The value contained in the text field
  containerSectionIdentity.appendChild(textInputFirstName) // I add my input in my p
  containerSectionIdentity.appendChild(document.createElement("br")) // I add a ("br") for a line break

  // I create the label "quel est votre nom "?
  let labelLastName = document.createElement("label") // I create a label
  labelLastName.textContent = "Quel est votre nom ? " // I put text on it.
  containerSectionIdentity.appendChild(labelLastName) // I add my label in my p

  // I create the text input of LastName
  let textInputLastName = document.createElement("input") // I create a input
  textInputLastName.type = "text" // I give it a text type
  // textInputLastName.minlength = "2" //that the field must contain at least 2 characters
  // textInputLastName.maxlength = "50" // that the firld must contain at max 50 characters
  textInputLastName.value = "" //The value contained in the text field
  textInputLastName.required = true; // The text field must be filled in
  containerSectionIdentity.appendChild(textInputLastName) // I add my input on my p
  containerSectionIdentity.appendChild(document.createElement("br")) // I add a ("br") for a line break

  // Submit containerIdentity
  let inputSubmitIdentity = document.createElement("input") // I create a input
  inputSubmitIdentity.type = "button" // I give it a button type
  inputSubmitIdentity.value = "OK" // I give it a text for button
  containerSectionIdentity.appendChild(inputSubmitIdentity) // I add my input on my p
  containerSectionIdentity.appendChild(document.createElement("br")) // I add a ("br") for a line break
  inputSubmitIdentity.addEventListener("click", messageName, false) // I add an event listener when I click on my input button

  //hidden message
  let textMessageName = document.createElement("p") // I create a p
  textMessageName.textContent = "" // I give it a text for my p
  textMessageName.hidden = true // I voluntarily hide my message
  containerSectionIdentity.appendChild(textMessageName) // I add me p on my form


  //message function
  function messageName() { //I create a function
    if (((textInputLastName.value == "") | (textInputLastName.value == null)) && ((textInputFirstName.value == "") | (textInputFirstName.value == null))) { /*if the value of the lastname is null or nothing and if the value of the firstname is null or nothing*/
      textMessageName.textContent = "Veuillez remplir le formulaire"; //it displays the following message: Veuillez remplir le formulaire
      textMessageName.hidden = false; // to make visible my hidden message
    } else { //else
      textMessageName.hidden = false //// to make visible my hidden message
      textMessageName.textContent = "Bonjour " + textInputFirstName.value + " " + textInputLastName.value + " !" //put these text into messages

    }
  }


}

// graphicalInterface(graphicalInterface); // start the function




// Exercice 2



function graphicalInterface2() {
  // Div overall
  let containerSalary = document.createElement("div") // I create a div
  document.body.appendChild(containerSalary) // I add my div in my body

  //let container for Form Salary
  let containerFormSalary = document.createElement("form") //I create a form
  containerFormSalary.action = "#"
  containerFormSalary.method = "post"
  containerSalary.appendChild(containerFormSalary) // I add my form in my div overall

  // first paragraph for  containerIdentity
  let containerSectionSalary = document.createElement("p") // I create a p
  containerFormSalary.appendChild(containerSectionSalary) // I add my p in my form

  //I create the label "Salaire mensuel brut"
  let labelGrossMonthlySalary = document.createElement("label") // I create a label
  labelGrossMonthlySalary.textContent = "Salaire mensuel brut " // I put a text on it.
  containerSectionSalary.appendChild(labelGrossMonthlySalary) // I add my label in my p

  //I create the input Number of :"Salaire mensuel brut"
  let inputGrossMonthlySalary = document.createElement("input") // I create a input
  inputGrossMonthlySalary.type = "number" // The type of my input is number
  containerSectionSalary.appendChild(inputGrossMonthlySalary)// I add my input in my p
  containerSectionSalary.appendChild(document.createElement("br")) // I add a ("br") for a line break

  //I create the label "Salaire mensuel net"
  let labelNetMonthlySalary = document.createElement("label") // I create a label
  labelNetMonthlySalary.textContent = "Salaire mensuel net " // I put a text on it.
  containerSectionSalary.appendChild(labelNetMonthlySalary) // I add my label in my p

  //I create the input Number of :"Salaire mensuel net"
  let inputNetMonthlySalary = document.createElement("input") // I create a input
  inputNetMonthlySalary.type = "number" // The type of my input is number
  containerSectionSalary.appendChild(inputNetMonthlySalary)// I add my input in my p
  containerSectionSalary.appendChild(document.createElement("br")) // I add a ("br") for a line break

  //I create the label "Salaire annuel brut"
  let labelGrossAnnualSalary = document.createElement("label") // I create a label
  labelGrossAnnualSalary.textContent = "Salaire annuel brut " // I put a text on it.
  containerSectionSalary.appendChild(labelGrossAnnualSalary) // I add my label in my p

  //I create the input Number of :"Salaire annuel brut"
  let inputGrossAnnualSalary = document.createElement("input") // I create a input
  inputGrossAnnualSalary.type = "number" // The type of my input is number
  containerSectionSalary.appendChild(inputGrossAnnualSalary)// I add my input in my p
  containerSectionSalary.appendChild(document.createElement("br")) // I add a ("br") for a line break

  //I create the label "Salaire annuel net"
  let labelNetAnnualSalary = document.createElement("label") // I create a label
  labelNetAnnualSalary.textContent = "Salaire annuel net " // I put a text on it.
  containerSectionSalary.appendChild(labelNetAnnualSalary) // I add my label in my p

  //I create the input Number of :"Salaire annuel net
  let inputNetAnnualSalary = document.createElement("input") // I create a input
  inputNetAnnualSalary.type = "number" // The type of my input is number
  containerSectionSalary.appendChild(inputNetAnnualSalary)// I add my input in my p
  containerSectionSalary.appendChild(document.createElement("br")) // I add a ("br") for a line break


}

graphicalInterface2(graphicalInterface2);
