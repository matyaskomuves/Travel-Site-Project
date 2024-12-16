//Appear on Scroll
const sections = document.querySelectorAll('section');

const onIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};

const observer = new IntersectionObserver(onIntersection, { threshold: 0.33 });

sections.forEach(section => observer.observe(section));

function createBookingIceland() {
    const bookIcelandSection = createSection();
    const form = createBookingForm();

    bookIcelandSection.appendChild(form);
    document.body.appendChild(bookIcelandSection);
}

function createSection() {
    const section = document.createElement('div');
    section.setAttribute('id', 'book-iceland-section');
    section.classList.add('visible', 'container', 'w-50');

    const heading = document.createElement('h6');
    heading.classList.add('display-6', 'mb-3', 'mt-3', 'text-center');
    heading.textContent = 'Book Iceland';
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Our team will get back to you by e-mail about dates and prices.';
    paragraph.classList.add('text-center', 'mt-3', 'mb.3', 'fw-lighter');

    section.appendChild(heading);
    section.appendChild(paragraph);
    return section;
}

function createBookingForm() {
    const form = document.createElement('form');

    form.appendChild(createFormGroup('name', 'Name', 'text'));
    form.appendChild(createFormGroup('phone', 'Mobile Number', 'tel'));
    form.appendChild(createFormGroup('email', 'Email address', 'email'));

    const returningCustomerGroup = createReturningCustomerGroup();
    form.appendChild(returningCustomerGroup);

    const submitButton = createSubmitButton();
    form.appendChild(submitButton);

    return form;
}

function createFormGroup(id, label, type) {
    const group = document.createElement('div');
    group.classList.add('mb-3');

    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', id);
    labelElement.classList.add('form-label');
    labelElement.textContent = label;

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);
    input.classList.add('form-control');
    input.required = true;

    group.appendChild(labelElement);
    group.appendChild(input);

    return group;
}

function createReturningCustomerGroup() {
    const group = document.createElement('div');
    group.classList.add('mb-3');

    const label = document.createElement('label');
    label.classList.add('form-label');
    label.textContent = 'Are you a returning customer?';

    const yesOption = createRadioOption('returningCustomer', 'yes', 'Yes');
    const noOption = createRadioOption('returningCustomer', 'no', 'No', true);

    group.appendChild(label);
    group.appendChild(yesOption);
    group.appendChild(noOption);

    return group;
}

function createRadioOption(name, id, labelText, isChecked = false) {
    const container = document.createElement('div');

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', name);
    input.setAttribute('id', id);
    input.classList.add('form-check-input');
    input.value = id;
    if (isChecked) input.checked = true;

    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.classList.add('form-check-label');
    label.textContent = labelText;

    container.appendChild(input);
    container.appendChild(label);

    return container;
}

function createSubmitButton() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('mt-3', 'mb-3');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-secondary');
    button.setAttribute('type', 'button');
    button.textContent = 'Submit';

    buttonContainer.appendChild(button);

    return buttonContainer;
}
