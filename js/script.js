// function that checks if a string is a valid url or not
const isValidUrl = (urlString) => {
  var inputElement = document.createElement('input');
  inputElement.type = 'url';
  inputElement.value = urlString;

  if (!inputElement.checkValidity()) {
    return false;
  } else {
    return true;
  }
};

const linkForm = document.querySelector('#link-form');
const input = document.querySelector('#link-input');
const errMsg = document.querySelector('#err-msg');

linkForm.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  if (input.value.trim() === '' || !isValidUrl(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL.';
    input.value = '';
    input.focus();
    input.classList.add('border-red');
  } else {
    console.log(input.value);
    errMsg.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success!');
  }
}

// Function toggle mobile menu
const hamburgerBtn = document.querySelector('#hamburger-btn');
const menu = document.querySelector('#mobile-menu');

hamburgerBtn.addEventListener('click', toggleOpen);
function toggleOpen() {
  hamburgerBtn.classList.toggle('open');
  menu.classList.toggle('hidden');
  // fade in effect from opacity-0 to opacity-100 doesn't work, why?
  menu.classList.toggle('trans');
}
