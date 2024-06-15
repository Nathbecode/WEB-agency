// Get modal element
var modal = document.getElementById('myModal');

// Get open modal button
var openModalBtn = document.getElementById('openModalBtn');

// Get close button element
var closeBtn = document.getElementsByClassName('close')[0];

// Listen for open click
openModalBtn.addEventListener('click', openModal);

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

AOS.init();

document.getElementById('email').addEventListener("input",checkEmail);
function checkEmail (event) {
    let email = event.target.value;
    let ermsg = document.getElementById('msgem');
    if(!email.includes('@') || !email.includes('.')) {
        ermsg.style.display = 'unset';
        document.getElementById('email').style.backgroundColor = 'rgb(219,111,111)';
    } else if (email.includes('@')&&email.includes('.')) {
        ermsg.style.display = 'none';
        document.getElementById('email').style.backgroundColor='rgb(111,219,190)';
    }
}

document.getElementById('username').addEventListener("input",checkUser);
function checkUser () {
    let user = document.getElementById('username').value;
    let array = user.split('');
    let ermsg = document.getElementById('msgus');
    if (array.length<5) {
        ermsg.style.display = 'unset';
        document.getElementById('username').style.backgroundColor = 'rgb(219,111,111)';
    }  else if (array.length>10) {
        ermsg.style.display = 'unset';
        document.getElementById('username').style.backgroundColor = 'rgb(219,111,111)';
    }  else if(!(/^[a-z]+$/).test(user)) {
        ermsg.style.display = 'unset';
        document.getElementById('username').style.backgroundColor = 'rgb(219,111,111)';
        } 
    else {
        ermsg.style.display = 'none';
        document.getElementById('username').style.backgroundColor='rgb(111,219,190)';
    }
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(`Your username is: ${document.getElementById('username').value},and your email is: ${document.getElementById('email').value}`); 
});

