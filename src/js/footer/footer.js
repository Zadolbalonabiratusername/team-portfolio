import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
    form: document.querySelector("#contact-form"),
    formEmail: document.querySelector('.footer-input-email'),
    formComment: document.querySelector('.footer-input-comments'),
    messageSucces: document.querySelector('.email-succes'),
    messageError: document.querySelector('.email-error'),
    modal: document.querySelector(".modal"),
    modalClose: document.querySelector(".modal-close"),
};

const emailPattern = new RegExp(refs.formEmail.getAttribute('pattern'));

refs.formEmail.addEventListener('focus', function() {
    if (refs.formEmail.value.trim() === '') {
        refs.formEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.5)';
    }
});

refs.formEmail.addEventListener('input', function() {
    const emailValue = refs.formEmail.value.trim();

    if (emailValue === '') {
        refs.messageSucces.style.display = 'none';
        refs.messageError.style.display = 'none';
        refs.formEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.5)'; 
    } else if (emailPattern.test(emailValue)) {
        refs.messageSucces.style.display = 'block';
        refs.messageError.style.display = 'none';
        refs.formEmail.style.borderBottom = '1px solid #3cbc81';
    } else {
        refs.messageError.style.display = 'block';
        refs.messageSucces.style.display = 'none';
        refs.formEmail.style.borderBottom = '1px solid #e74a3b';
    }
});

refs.formEmail.addEventListener('blur', function() {
    if (refs.formEmail.value.trim() === '') {
        refs.formEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';
    }
});

function openModal() {
    refs.modal.classList.add('is-open');
    document.addEventListener('keydown', onEscPress);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    refs.modal.classList.remove('is-open');
    document.removeEventListener('keydown', onEscPress); 
    document.body.style.overflow = 'auto';
}

refs.modalClose.addEventListener('click', closeModal);

refs.modal.addEventListener('click', (event) => {
    if (event.target === refs.modal) {
        closeModal();
    }
});

refs.formEmail.addEventListener('mouseover', function() {
    refs.formEmail.style.borderBottom ='1px solid rgba(250, 250, 250, 0.5)';
});

refs.formEmail.addEventListener('mouseout', function() {
    if (refs.formEmail.value.trim() === '') {
        refs.formEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)';
    }
});


function onEscPress(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

refs.form.addEventListener('submit', async function (event) {
    event.preventDefault(); 

    const formData = {
        email: refs.formEmail.value.trim(),
        comment: refs.formComment.value.trim(),
    };

    try {
        const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error("Submission error. Please try again.");

        const responseData = await response.json(); 
        const modalContent = document.querySelector('.message-text');
        modalContent.innerHTML = `
            <h2 class="modal-title">${responseData.title}</h2>
            <p class="modal-text"> ${responseData.message}</p>
        `;

        openModal();
        document.body.style.overflow = 'hidden';
        refs.messageSucces.style.display = 'none';
        refs.formEmail.style.borderBottom = '1px solid rgba(250, 250, 250, 0.2)'; 
        refs.form.reset(); 

    } catch (error) {
        console.error(error);
        iziToast.error({
            title: 'Error',
            message: error.message || "An unexpected error occurred. Please try again.",
            position: 'topRight'
        });
    }
});



