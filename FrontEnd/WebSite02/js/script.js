(function PopUp() {
    var editButton = document.getElementById("editButton");
    var deleteButton = document.getElementById("deleteButton");
    var cancelButton = document.getElementById("cancel");  
    // O botão Edit abre uma Dialog
    editButton.addEventListener("click", function() {
      favDialog.showModal();
    });
  
    // O botão Delete abre uma Dialog (ou qualquer outra ação desejada)
    deleteButton.addEventListener("click", function() {
      favDialog.showModal();
    });

    // O botão cancelButtom fecha uma Dialog
    cancelButton.addEventListener("click", function() {
      favDialog.close();
    });
})();