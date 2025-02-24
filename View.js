
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
        newTr.querySelector('.checkOutTime').innerText = x.getTime();
        newTr.querySelector('.returned').innerHTML = "";

        const returnedBox = createAndReturn('input');

        newTr.querySelector('.returned').appendChild(returnedBox);
        let editLink =  newTr.querySelector('.editButton').querySelector('a');
        editLink.addEventListener('click', function() {

            if (editLink.innerText === "edit") { //well NOW they are editing so change to done
                editLink.innerText = "done"; //change text to done!


                const firstNameInp = document.createElement('input');
                firstNameInp.type = 'text';
                firstNameInp.value = newTr.querySelector('.firstName').innerText;
                newTr.querySelector('.firstName').innerHTML = '';
                newTr.querySelector('.firstName').appendChild(firstNameInp);

                const lastNameInp = document.createElement('input');
                lastNameInp.type = 'text';
                lastNameInp.value = newTr.querySelector('.lastName').innerText;
                newTr.querySelector('.lastName').innerHTML = '';
                newTr.querySelector('.lastName').appendChild(lastNameInp);

                const equipmentInp = document.createElement('input');
                equipmentInp.type = 'text';
                equipmentInp.value = newTr.querySelector('.equipment').innerText;
                newTr.querySelector('.equipment').innerHTML = '';
                newTr.querySelector('.equipment').appendChild(equipmentInp);

                const checkOutDateInp = document.createElement('input');
                checkOutDateInp.type = 'date';
                checkOutDateInp.value = newTr.querySelector('.checkOutDate').innerText;
                newTr.querySelector('.checkOutDate').innerHTML = '';
                newTr.querySelector('.checkOutDate').appendChild(checkOutDateInp);

                // newTr.querySelector('.firstName').innerText = x.getFirstName();
                // newTr.querySelector('.lastName').innerText = x.getLastName();
                // newTr.querySelector('.equipment').innerText = x.getEquipment();
                // newTr.querySelector('.checkOutDate').innerText = x.getCheckoutDate();
                newTr.querySelector('.returned').innerHTML = "";
            } else if (editLink.innerText === "done") { //they WERE editing but now theyre done
                editLink.innerText = "edit"; //change text to edit so they can edit again!

                newTr.querySelector('.firstName').innerText = newTr.querySelector('.firstName').querySelector('input').value;
                x.setFirstName(newTr.querySelector('.firstName').innerText);

                newTr.querySelector('.lastName').innerText = newTr.querySelector('.lastName').querySelector('input').value;
                x.setLastName(newTr.querySelector('.lastName').innerText);

                newTr.querySelector('.equipment').innerText = newTr.querySelector('.equipment').querySelector('input').value;
                x.setEquipment(newTr.querySelector('.equipment').innerText);

                newTr.querySelector('.checkOutDate').innerText = newTr.querySelector('.checkOutDate').querySelector('input').value;
                x.setCheckoutDate(newTr.querySelector('.checkOutDate').innerText);

                newTr.querySelector('.returned').appendChild(returnedBox); //note: should not be able to edit returned? during edit mode, only after changes saved
                console.log(x.getFirstName());
            }

            console.log("hi")
            
        })
        
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

function getTime(date) { //StackOverflow code https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript
    let d = new Date();
    let h = (d.getHours()<10?'0':'') + d.getHours();
    let m = (d.getMinutes()<10?'0':'') + d.getMinutes();
    return h + ':' + m;
}

class ToDoListView {
    constructor(model) {
        this.model = model;
        this.tTemplate = document.getElementById('newItem');
        this.tContents = document.getElementById('contents');
        this.dateCheckOut = document.getElementById('checkoutDate');
        this.time = document.getElementById('checkoutTime');

        this.dateCheckOut.value = getTodayDate();
        this.time.value = getTime();

        this.model.subscribe(this.updateView.bind(this));
    }

    updateView(model, msg) {
        if (msg!="changedItems") {return};
        this.tContents.innerHTML = "";
        updateTable(model, this.tTemplate, this.tContents);
    }
}