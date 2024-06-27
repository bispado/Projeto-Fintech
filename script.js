function toggleReadOnly(elementId, editFlag) {
    editFlag = !editFlag;
    document.getElementById(elementId).readOnly = editFlag;
    return editFlag;
}
var saldoValue = 1
var rendaValue = 1
var despesaValue = 1

var editFlagSaldo = false;
var editFlagRenda = false;
var editFlagDespesa = false;

function editSaldo() {
    editFlagSaldo = toggleReadOnly("form-saldo", editFlagSaldo);

    saldoValue = document.getElementById("form-saldo").value;

    console.log(saldoValue);

}

function editRenda() {
    editFlagRenda = toggleReadOnly("form-renda", editFlagRenda);
    rendaValue = document.getElementById("form-renda").value;
    console.log(rendaValue);


}

function editDespesa() {
    editFlagDespesa = toggleReadOnly("form-despesa", editFlagDespesa);
    despesaValue = document.getElementById("form-despesa").value;
    console.log(despesaValue);

}




