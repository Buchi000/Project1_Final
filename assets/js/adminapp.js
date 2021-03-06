var db;

var admin = [
    { id: 1, userName: "Admin", password: "@Admin!"},
   
];

document.addEventListener('DOMContentLoaded', () => {

    // create the database
    let userDB = indexedDB.open('admin', 1);
    
    userDB.onsuccess = function() {
        db = userDB.result;
        populateUserData();
    }

    userDB.onupgradeneeded = function(event) {
        var db = event.target.result;

        db.onerror = function() {
            console.log('Error loading database.');
        };

        var usersStore = db.createObjectStore('admin', {keyPath: 'id'});
        usersStore.createIndex('userName', 'userName', {unique: false});
        usersStore.createIndex('password', 'password', {unique: false});
       

    }


    function populateUserData() {
        var userTransaction = db.transaction(['admin'], 'readwrite');
        var userStore = userTransaction.objectStore('admin');
        for(let i = 0; i < admin.length ; i++) {
          var request = userStore.put(admin[i]);
        };
    
        userTransaction.oncomplete = function() {
        //   console.log('User table Populated');
        };

    }
});

const tbody = document.querySelector('.tablee');

let dbRequest = indexedDB.open('users', 1);

dbRequest.onsuccess = function(event) {
    db = dbRequest.result;
    displayUsers();
}

function displayUsers() {
    let userStore = db.transaction('users').objectStore('users');

    userStore.openCursor().onsuccess = function(e) {
        let cursor = e.target.result;

        if(cursor) {
            let userRow = document.createElement('tr');
            userRow.className = 'user-row';

            let user = `<td>${cursor.value.userName}</td>
            <td>${cursor.value.phoneNumber}</td>
            <td>${cursor.value.password}</td>`;
            userRow.innerHTML = user
            tbody.appendChild(userRow);
            cursor.continue();
        }
    }
}