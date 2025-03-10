let addInfoButton = document.getElementById('addInfo');
let studentIDInput = document.querySelector('#idText');
let equipmentIDInput = document.querySelector('#equipmentText');
let model = new checkOutList();
let view = new ToDoListView(model);
// let lsm = new LocalStorageManager(model, 'toDoListItems');

let userInputs = {
    studentID: document.getElementById('idText'),
    equipment: document.getElementById('equipmentText'),
    checkoutDate: document.getElementById('checkoutDate'),
    time: document.getElementById('checkoutTime')
};

const studentIDlen = 11;
const equipmentIDlen=6; 

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

function getNoSpacesText(text) {
    return text.replace(/\s+/g, '');
}

function clearInputs() {
    userInputs.studentID.value = '';
    userInputs.equipment.value = '';
}

function handleBarcode (scanned_barcode) {
    scanned_barcode = getNoSpacesText(scanned_barcode);
    if (scanned_barcode.length === studentIDlen) {
        userInputs.studentID.value = scanned_barcode;
        if (getNoSpacesText(userInputs.equipment.value).length != 0) {
            model.addItem(new checkOutItem(userInputs.studentID.value, userInputs.equipment.value, userInputs.checkoutDate.value, userInputs.time.value));
            clearInputs();
        }
    } else if (scanned_barcode.length === equipmentIDlen) {
        userInputs.equipment.value = scanned_barcode;
        if (getNoSpacesText(userInputs.studentID.value).length != 0) {
            model.addItem(new checkOutItem(userInputs.studentID.value, userInputs.equipment.value, userInputs.checkoutDate.value, userInputs.time.value));
            clearInputs();
        }
    }
}

function onClick() {
    model.addItem(new checkOutItem(userInputs.studentID.value, userInputs.equipment.value, userInputs.checkoutDate.value, userInputs.time.value));
    clearInputs();
}

addInfoButton.onclick = onClick;