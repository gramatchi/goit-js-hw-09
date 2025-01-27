let formData = { email: '', message: '' };
const LOCAL_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

function initFormData() {
  const localFormData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (localFormData !== null) {
    formData.email = localFormData.email;
    formData.message = localFormData.message;
    formRef.elements.email.value = localFormData.email;
    formRef.elements.message.value = localFormData.message;
  }
}
initFormData();

formRef.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

formRef.addEventListener('submit', e => {
  e.preventDefault();

  formData.email = formRef.elements.email.value.trim();
  formData.message = formRef.elements.message.value.trim();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.clear();
  formRef.reset();
  formData = { email: '', message: '' };
});

