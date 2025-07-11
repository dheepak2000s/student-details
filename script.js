let students = [];

function addStudent(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    const student = { name, age, gender, course, email };
    students.push(student);

    updateTable();
    document.getElementById('studentForm').reset();
}

function deleteStudent(index) {
    students.splice(index, 1);
    updateTable();
}

function updateTable() {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';
    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('studentForm').addEventListener('submit', addStudent);