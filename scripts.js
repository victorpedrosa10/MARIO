/*Variavés
    3 jeitos de criar uma(espaço de memoria)
    -let -> pode alterar o valor depois
    -const -> contante

*/
 /*funções
    um trecho de codigo que é usado quando é chamado
    function soma()

    pra chamar
    soma()
 */
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden"
}