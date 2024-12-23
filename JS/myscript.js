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

const observer = new IntersectionObserver(onIntersection, { threshold: 0.4 });

sections.forEach(section => observer.observe(section));

function createBooking() {
    const bookIcelandSection = createSection();
    const form = createBookingForm();

    if (document.getElementById('book-iceland-section')) {
        alert('This Booking form already exists. Click CLOSE to jump to it.');
        return;
    }

    bookIcelandSection.appendChild(form);
    document.body.appendChild(bookIcelandSection);
}

function createSection() {
    const section = document.createElement('div');
    section.setAttribute('id', 'book-iceland-section');
    section.classList.add('visible', 'container', 'w-50');

    const heading = document.createElement('h6');
    heading.classList.add('display-6', 'mb-3', 'mt-3', 'text-center');
    heading.textContent = 'Book a trip you will never forget';
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

    const destinationDropDown = createDestinationDropDown()
    form.appendChild(destinationDropDown);

    const returningCustomerGroup = createReturningCustomerGroup();
    form.appendChild(returningCustomerGroup);

    const submitButton = createSubmitButton();
    form.appendChild(submitButton);

    return form;
}

function createDestinationDropDown() {

    const container = document.createElement('div');
    container.classList.add('form-group', 'mb-3');
    const dropdownLabel = document.createElement('label');
    dropdownLabel.classList.add('form-label');
    dropdownLabel.setAttribute('for', 'destination');
    dropdownLabel.textContent = 'Your desired destination:';

    const dropdown = document.createElement('select');
    dropdown.setAttribute('id', 'destination');
    dropdown.classList.add('form-select', 'mb-3');

    const options = ['Iceland', 'Austria', 'Italy'];
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase();
        optionElement.textContent = option;
        dropdown.appendChild(optionElement);
    });

    container.appendChild(dropdownLabel);
    container.appendChild(dropdown);

    return container;
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
    label.textContent = 'Have you travelled with us before?';

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
    buttonContainer.classList.add('container', 'mt-3', 'mb-3', 'text-center');

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-secondary', 'mb-5');
    button.setAttribute('type', 'button');
    button.textContent = 'Submit';

    buttonContainer.appendChild(button);

    return buttonContainer;
}
