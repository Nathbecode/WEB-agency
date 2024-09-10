// https://www.figma.com/design/LlKlRQ31ShrIRYDrtxKuRW/Studio-Design-Landin-Page-(Community)?node-id=0-1&t=wLqgFIMYm7v8j0Rf-0

// Get modal element
var modal = document.getElementById('myModal');

// Get open modal buttons
var openModalBtn = document.getElementById('openModalBtn');
var openModalBtn2 = document.getElementById('openModal2');

// Get close button element
var closeBtn = document.getElementsByClassName('close')[0];

//Get email2
var modalEmailInput = document.getElementById('email');
var newsletterEmailInput = document.getElementById('email2');

// Listen for open click
openModalBtn.addEventListener('click', function() {
    openModal();
});
openModalBtn2.addEventListener('click', function() {
    openModal(newsletterEmailInput.value);
});


// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(emailValue = '') {
    if (emailValue) {
        modalEmailInput.value = emailValue;
    }
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

// Email validation function
document.getElementById('email').addEventListener("input", checkEmail);
function checkEmail(event) {
    let email = event.target.value;
    let ermsg = document.getElementById('msgem');
    if (!email.includes('@') || !email.includes('.')) {
        ermsg.style.display = 'unset';
        document.getElementById('email').style.backgroundColor = 'rgb(219,111,111)';
    } else if (email.includes('@') && email.includes('.')) {
        ermsg.style.display = 'none';
        document.getElementById('email').style.backgroundColor = 'rgb(111,219,190)';
    }
}

// Username validation function
document.getElementById('username').addEventListener("input", checkUser);
function checkUser() {
    let user = document.getElementById('username').value;
    let array = user.split('');
    let ermsg = document.getElementById('msgus');
    if (array.length < 5 || array.length > 10 || !(/^[a-z]+$/.test(user))) {
        ermsg.style.display = 'unset';
        document.getElementById('username').style.backgroundColor = 'rgb(219,111,111)';
    } else {
        ermsg.style.display = 'none';
        document.getElementById('username').style.backgroundColor = 'rgb(111,219,190)';
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burgerMenu");
    const navMenu = document.getElementById("navMenu");

    burgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
