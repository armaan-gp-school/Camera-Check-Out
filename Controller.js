let addInfoButton = document.getElementById('addInfo');

let model = new checkOutList();
let view = new ToDoListView(model);
// let lsm = new LocalStorageManager(model, 'toDoListItems');

let userInputs = {
    studentID: document.getElementById('idText'),
    equipment: document.getElementById('equipmentText'),
    checkoutDate: document.getElementById('checkoutDate')
};


let barcode = '';
let interval;
document.addEventListener('keydown', function(evt) {
    if (interval)
        clearInterval (interval);
    if (evt.code == 'Enter') {
        if (barcode)
            handleBarcode (barcode);
        barcode = '';
        return;
    }
    
    if (evt.key != 'Shift')
        barcode += evt.key;
    interval = setInterval(() => barcode = '', 20);
});
function handleBarcode (scanned_barcode) {
    document.querySelector('#idText').innerText = scanned_barcode;
}

function onClick() {
    model.addItem(new checkOutItem(userInputs.studentID.value, userInputs.equipment.value, userInputs.checkoutDate.value));
}

addInfoButton.onclick = onClick;