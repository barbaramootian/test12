var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    formData["event"] = document.getElementById("event").value;
    formData["venue"] = document.getElementById("venue").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("eventList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phoneNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.event;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.venue;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.date;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("event").value = "";
    document.getElementById("venue").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("event").value = selectedRow.cells[2].innerHTML;
    document.getElementById("venue").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.phoneNumber;
    selectedRow.cells[2].innerHTML = formData.event;
    selectedRow.cells[3].innerHTML = formData.venue;
    selectedRow.cells[4].innerHTML = formData.date;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("eventList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}