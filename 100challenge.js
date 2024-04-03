let submittedNamesList = [];

function checkName() {
    const input = document.getElementById('nameInput').value.trim();

    submittedNamesList.push(input);
    updateSubmittedNamesList();
}

function updateSubmittedNamesList() {
    const submittedNamesElement = document.getElementById('submittedNames');
    const submittedCounter = document.getElementById('counter');
    submittedNamesElement.innerHTML = '<ul>';


    submittedNamesList.forEach((name, index) => {
        submittedNamesElement.innerHTML += `<li>${name}</li>`;
        submittedCounter.innerText = `${index + 1}`;
    });

    submittedNamesElement.innerHTML += '</ul>';
}