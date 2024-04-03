let submittedNamesList = [];

function checkName() {
    const nameInput = document.getElementById('nameInput');
    const input = nameInput.value.trim();

    if (input && input.length > 2) {
        submittedNamesList.push(input);
        updateSubmittedNamesList();
    } else {
        // write error handler and case for too few characters
    }
    nameInput.value = "";
}

function updateSubmittedNamesList() {
    const submittedNamesElement = document.getElementById('submittedNames');
    const submittedCounter = document.getElementById('counter');
    submittedNamesElement.innerHTML = '<ul>';


    submittedNamesList.forEach((name, index) => {
        submittedNamesElement.innerHTML += `<li class="submittedName">${name}</li>`;
        submittedCounter.innerText = `${index + 1}`;
    });

    submittedNamesElement.innerHTML += '</ul>';
}