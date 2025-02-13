
function makeCopy(template) {
    return document.importNode(template.content, true);
}

function checkboxClick(checkbox, row) {
    if (!checkbox.checked === true) {return};
    console.log("d")
    row.remove();
}

function deleteAfter(seconds, deleteWhat) {
    setTimeout(function() {
        deleteWhat.remove();
    }, seconds * 1000);
}

function createAndReturn(createWhat) {
    const returnedBox = document.createElement(createWhat);
    returnedBox.type = 'checkbox';
    return returnedBox;
}

function updateTable(model, template, whereAdd) {
    
    for (let i = 0; i < model.getItems().length; i++) {
        x = model.getItems()[i];
        let newTr = makeCopy(template).querySelector('tr');
        whereAdd.appendChild(newTr);
        newTr.querySelector('.firstName').innerText = x.getFirstName();
        newTr.querySelector('.lastName').innerText = x.getLastName();
        newTr.querySelector('.equipment').innerText = x.getEquipment();
        newTr.querySelector('.checkOutDate').innerText = x.getCheckoutDate();
        newTr.querySelector('.returned').innerHTML = "";

        const returnedBox = createAndReturn('input');

        newTr.querySelector('.returned').appendChild(returnedBox);
        
        returnedBox.addEventListener('click', function() {
            if (!returnedBox.checked === true) {return};
            deleteAfter(1, newTr);
            model.delete(i);
        })
    }
}

function getTodayDate() { //StackOverflow code https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
}

class ToDoListView {
    constructor(model) {
        this.model = model;
        this.tTemplate = document.getElementById('newItem');
        this.tContents = document.getElementById('contents');
        this.dateCheckOut = document.getElementById('checkoutDate');

        this.dateCheckOut.value = getTodayDate();

        this.model.subscribe(this.updateView.bind(this));
    }

    updateView(model, msg) {
        if (msg!="changedItems") {return};
        this.tContents.innerHTML = "";
        updateTable(model, this.tTemplate, this.tContents);
    }
}