let i = 1;
let tableArray = [];

function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var name = document.getElementById("student_name" + no);
    var roll = document.getElementById("student_roll" + no);
    var subject = document.getElementById("subject" + no);
    var marks = document.getElementById("marks" + no);
    var markedBy = document.getElementById("markedBy" + no);

    var name_data = name.innerHTML;
    var roll_data = roll.innerHTML;
    var subject_data = subject.innerHTML;
    var marks_data = marks.innerHTML;
    var marked_data = markedBy.innerHTML;


    name.parentNode.innerHTML = `<input type='text' id='student_name${no}' value=${name_data}>`;
    roll.parentNode.innerHTML = `<input type='text' id='student_roll${no}' value=${roll_data}>`;
    subject.parentNode.innerHTML = `<input type='text' id='subject${no}' value=${subject_data}>`;
    marks.parentNode.innerHTML = `<input type='text' id='marks${no}' value=${marks_data}>`;
    markedBy.parentNode.innerHTML = `<input type='text' id='markedBy${no}' value=${marked_data}>`;

}

function save_row(no) {
    var name = document.getElementById("student_name" + no);
    var roll = document.getElementById("student_roll" + no);
    var subject = document.getElementById("subject" + no);
    var marks = document.getElementById("marks" + no);
    var markedBy = document.getElementById("markedBy" + no);
    
    let name_val = name.value;
    let roll_val = roll.value;
    let subject_val = subject.value;
    let marks_val = marks.value;
    let markedBy_val = markedBy.value;

    name.parentNode.innerHTML = `<div id='student_name${no}'> ${name_val}</div>`;
    roll.parentNode.innerHTML = `<div  id='student_roll${no}'> ${roll_val}</div>`;
    subject.parentNode.innerHTML = `<div  id='subject${no}'> ${subject_val}</div>`;
    marks.parentNode.innerHTML = `<div  id='marks${no}'> ${marks_val}</div>`;
    markedBy.parentNode.innerHTML = `<div id='markedBy${no}'>${markedBy_val}</div>`;

    tableArray = tableArray.map((obj) => {
        if (obj['id'] == no) {
            obj = {
                student_name: name_val,
                student_roll: roll_val,
                subject: subject_val,
                marks: marks_val,
                markedBy: markedBy_val
            }
        }

        return obj
    })

    console.log(tableArray);

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
    
    document.getElementById("save-edit-column").innerHTML = "Edit"
}




function add_row() {
    const table = document.getElementById("data_table");
    const row = table.insertRow();
    let id = i++;

    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();
    const cell6 = row.insertCell();
    const cell7 = row.insertCell();

    cell1.innerHTML = id;
    cell2.innerHTML = "<input type='text' id='student_name" + id + "' value='' >";
    cell3.innerHTML = "<input type='text' id='student_roll" + id + "' value=''>";
    cell4.innerHTML = "<input type='text' id='subject" + id + "' value=''>";
    cell5.innerHTML = "<input type='text' id='marks" + id + "' value=''>";
    cell6.innerHTML = "<input type='text' id='markedBy" + id + "' value=''>";
    cell7.innerHTML = `<input type=button id=save_button${id} value=Save class=save-button onclick=save_row(${id}) />
 <input type=button id=edit_button${id} value=Edit class=edit-button onclick=edit_row(${id}) />
 `;


    tableArray.push(
        { id: id, student_name: '', student_roll: '', subject: "", marks: '', markedBy: "" },
    );

    console.log(tableArray)

    document.getElementById("edit_button" + id).style.display = "none";
    document.getElementById("save-edit-column").innerHTML = "Save"
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}