// 1. Create a signup form and display form data in your web
// page on submission.

// function detail(){
//     // Get form data
//     var name = document.getElementById("name").value;
//     var fName = document.getElementById("fName").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     document.write("Name:" + name + "<br/>");

//     document.write("Father's Name:" + fName + "<br/>");

//     document.write("Email:" + email + "<br/>");

//     document.write("Password:" + password + "<br/>");
// }

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.


// var longPara = "Success is often seen as reaching the goals we set for ourselves and feeling proud of our achievements. It means different things to different people. For some, success might be about earning a lot of money or getting a great job. For others, it might be about having a happy family or making a difference in the world. Success is not always easy to achieve. It often involves hard work, dealing with setbacks, and learning from mistakes. It's important to remember that success doesn't just come from winning awards or making a lot of money. True success also means feeling good about yourself and being satisfied with your life. To achieve success, it helps to have clear goals and work hard towards them. Staying positive and being determined can also make a big difference. Success is also about enjoying the journey and celebrating small wins along the way. It's not just about reaching the end but appreciating each step you take. Success can also mean helping others and making the world a better place. It's about finding what makes you happy and working towards it with passion. Everyone's idea of success is different, and that's okay. What matters most is that you feel fulfilled and happy with your achievements. Success is a personal journey, and it's important to stay true to yourself while you pursue your goals."

// function moreDetail() {
//     var content = document.getElementById("content");
//     var btn = document.getElementById("btn");
//     if (btn.innerText === "Show More") {
//         content.innerHTML += longPara;
//         btn.innerText = "Show Less";
//     } else {
//         content.innerHTML = content.innerHTML.replace(longPara, '');
//         btn.innerText = "Show More";
//     }
// }


// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

// function addStudent() {
//     var studentName = document.getElementById('stdName').value;
//     var studentAge = document.getElementById('stdAge').value;
//     var studentGrade = document.getElementById('stdGrade').value;

//     if (studentName === "" || studentAge === "" || studentGrade === "") {
//         alert("Please fill in all fields");
//         return;
//     }

//     var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

//     var row = document.createElement('tr');

//     var nameCell = document.createElement('td');
//     var ageCell = document.createElement('td');
//     var gradeCell = document.createElement('td');
//     var deleteCell = document.createElement('td');
//     var editCell = document.createElement('td');

//     nameCell.innerText = studentName;
//     ageCell.innerText = studentAge;
//     gradeCell.innerText = studentGrade;

//     var deleteButton = document.createElement('button');
//     deleteButton.innerText = "Delete";
//     deleteButton.setAttribute('onclick', 'deleteRow(this)');
    
//     var editButton = document.createElement('button');
//     editButton.innerText = "Edit";
//     editButton.setAttribute('onclick', 'editRow(this)');

//     deleteCell.appendChild(deleteButton);
//     editCell.appendChild(editButton);

//     row.appendChild(nameCell);
//     row.appendChild(ageCell);
//     row.appendChild(gradeCell);
//     row.appendChild(deleteCell);
//     row.appendChild(editCell);

//     table.appendChild(row);

//     document.getElementById('stdName').value = "";
//     document.getElementById('stdAge').value = "";
//     document.getElementById('stdGrade').value = "";
//     alert("Student added successfully");
// }

// function deleteRow(btn) {
//     var row = btn.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

// function editRow(btn) {
//     var row = btn.parentNode.parentNode;
//     var nameCell = row.children[0];
//     var ageCell = row.children[1];
//     var gradeCell = row.children[2];

//     var newName = prompt("Edit Name:", nameCell.innerText);
//     var newAge = prompt("Edit Age:", ageCell.innerText);
//     var newGrade = prompt("Edit Grade:", gradeCell.innerText);

//     if (newName !== null && newName !== "") {
//         nameCell.innerText = newName;
//     }
//     if (newAge !== null && newAge !== "") {
//         ageCell.innerText = newAge;
//     }
//     if (newGrade !== null && newGrade !== "") {
//         gradeCell.innerText = newGrade;
//     }
// }
