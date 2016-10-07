
var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,​
    // "this" will have the value of the person object because the person object will invoke showFullName ()​
    showFullName:function () {
        console.log (this.firstName + ' ' + this.lastName + arguments[0]);
    }
};
person.showFullName(["dddd"]);// Penelope Barrymore

//Fa referència  al'objecte window per tant no existeix la funció.
//var copia = showFullName.bind(person);
//Ho farem servir per fer herència per binds o prototype.
//copia();
//El bind no serveix per funcions amb paràmetres.
//Explicits: bind,call apply. Per definir a que fa referència el bind. S'anula quant s'usa bind.
//showFullName.call(persona,'Gavaldà');
//showFullName.apply(persona,['Gavaldà']); //En aquest cas igual que dalt però pasant un array... args