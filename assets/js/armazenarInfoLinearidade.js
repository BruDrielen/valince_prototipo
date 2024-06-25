
function storeData() {
    var mmq = document.getElementById("mmq").value;
    var selectedOption_mmq = document.getElementById("mmq").value;
    localStorage.setItem("mmq", mmq);
    localStorage.setItem("selectedOption_mmq", selectedOption_mmq);
    alert("Dados salvos!");

}
 