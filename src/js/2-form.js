const formData = { email: '', message: '' };
const LOCAL_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', event => {
  //formData[event.target.name] = event.target.value.trim();
  formData.email = formRef.elements.email.value.trim();
  formData.message = formRef.elements.message.value.trim();
  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
});

function initFormData() {
  const localFormData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  if (localFormData === null) return;

  const keys = Object.keys(localFormData);

  keys.forEach(key => {
    formRef.elements[key].value = localFormData[key];
  });
}

initFormData();

formRef.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.clear();
  formData.email = '';
  formData.message = '';
  formRef.reset();
});
