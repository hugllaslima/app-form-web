document.addEventListener('DOMContentLoaded', function () {
    loadTable();

    document.getElementById('dataForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;

        const userData = {
            name,
            email,
            phone,
            dob
        };

        let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
        dataList.push(userData);
        localStorage.setItem('dataList', JSON.stringify(dataList));

        this.reset();
        loadTable();
    });
});

function formatDate(dateStr) {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
}

function loadTable() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = '';

    const dataList = JSON.parse(localStorage.getItem('dataList')) || [];

    dataList.forEach((data, index) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.phone}</td>
            <td>${formatDate(data.dob)}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteData(${index})">Excluir</button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function deleteData(index) {
    let dataList = JSON.parse(localStorage.getItem('dataList')) || [];
    dataList.splice(index, 1);
    localStorage.setItem('dataList', JSON.stringify(dataList));
    loadTable();
}