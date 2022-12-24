const formEl = document.forms.feedback;

const handleSubmit = (e)=>{
    e.preventDefault();
    let formData = new FormData(formEl);   
    alert('Thank you for your feedback')
};


formEl.addEventListener('submit',handleSubmit);





