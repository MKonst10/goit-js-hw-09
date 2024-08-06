const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };
const emailField = form.elements.email;
const messageField = form.elements.message;

const onFormInput = event => {
  const formName = event.target.name;
  const formValue = event.target.value;
  formData[formName] = formValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSubmit = event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert`Please fill all fields`;
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
    emailField.value = '';
    messageField.value = '';
  }
};

const formFill = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;
  emailField.value = formDataFromLS.email;
  messageField.value = formDataFromLS.message;
};

formFill();

form.addEventListener('input', onFormInput);

form.addEventListener('submit', onFormSubmit);
