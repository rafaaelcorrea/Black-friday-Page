function enviar() {
//var card = window.getElementByName('cartao') // selecionei os radius do hmtl 

if (document.getElementById ("name").value.length == "" ||  document.getElementById ("e-mail1").value.length == "" ) { /* invés de declarar as variaveis  pegando os ids do HTMLs , dentro do if já seleciona diretamente essas ids e emendo com o teste lógico que eu desejar. Neste  caso a condicional se nenhuma caracter for teclada (value.length)  */

// RESULT. PARA DADOS EM BRANCOS : 

window.alert("Oops! Há algum dado em branco!")    


} else {
    window.alert("Enviamos as mellhores ofertas e promoções para o seu e-mail!! ")
}

}

//var vcard = window.document.getElementsByName('cartao')

function cartão()  {

    var vcard = window.document.getElementsByName('cartao')

if( vcard[0].checked) {

    // CASO POSSUA CARTÃO :

    window.alert("Agradecemos por já ser o nosso cliente! Boas compras!! ")

} else if (  vcard[1].checked  ) {

    // CASO NÃO POSSUA CARTÃO

window.alert("Ao clicar em receber ofertas, também lhe enviaremos as informações sobre o nosso cartão!")


}

}