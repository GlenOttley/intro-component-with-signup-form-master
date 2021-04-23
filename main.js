const fnameFlash = document.querySelector('.fname-flash');
const lnameFlash = document.querySelector('.lname-flash');
const emailFlash = document.querySelector('.email-flash');
const invalidEmailFlash = document.querySelector('.invalid-email-flash');
const passwordFlash = document.querySelector('.password-flash');

const fname = document.myForm.fname;
const lname = document.myForm.lname;
const email = document.myForm.email;
const password = document.myForm.password;

function validate() {
	const atPos = email.value.indexOf('@');
	const dotPos = email.value.lastIndexOf('.');

	fnameFlash.style.display = "none";
	lnameFlash.style.display = "none";
	emailFlash.style.display = "none";
	invalidEmailFlash.style.display = "none";
	passwordFlash.style.display = "none";

	if (fname.classList.contains('form__error')) {
		fname.classList.toggle('form__error')
	}
	if (lname.classList.contains('form__error')) {
		lname.classList.toggle('form__error')
	}
	if (email.classList.contains('form__error')) {
		email.classList.toggle('form__error')
	}
	if (password.classList.contains('form__error')) {
		password.classList.toggle('form__error')
	}

 	if (fname.value == "") {
    fname.classList.toggle('form__error');
    fnameFlash.style.display = "block";
  }
  if (lname.value == "") {
    lname.classList.toggle('form__error');
    lnameFlash.style.display = "block";
  }
  if (email.value == "") {
    email.classList.toggle('form__error');
    emailFlash.style.display = "block";
  } else if (atPos < 1 || (dotPos - atPos < 2)) {
  	email.classList.toggle('form__error');
		invalidEmailFlash.style.display = "block";
	}
  if (password.value == "") {
    password.classList.toggle('form__error');
    passwordFlash.style.display = "block";
  }	
}