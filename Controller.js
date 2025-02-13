let addInfoButton = document.getElementById('addInfo');

let model = new checkOutList();
let view = new ToDoListView(model);
// let lsm = new LocalStorageManager(model, 'toDoListItems');

let userInputs = {
    studentID: document.getElementById('idText'),
    equipment: document.getElementById('equipmentText'),
    checkoutDate: document.getElementById('checkoutDate')
};

function onClick() {
    model.addItem(new checkOutItem(userInputs.studentID.value, userInputs.equipment.value, userInputs.checkoutDate.value));
}

addInfoButton.onclick = onClick;