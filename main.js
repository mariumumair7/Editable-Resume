var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var resumeData;
// Handle form submission to generate the initial resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    resumeData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        email: document.getElementById('email').value,
        religion: document.getElementById('religion').value,
        address: document.getElementById('address').value,
        mobile: document.getElementById('mobile').value,
        dob: document.getElementById('dob').value,
        nationality: document.getElementById('country').value,
        objectives: document.getElementById('objectives').value,
        skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(function (el) { return el.value; }),
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
    };
    displayResume(resumeData);
});
function displayResume(data) {
    resumeOutput.innerHTML = "\n        <h2>Your Resume</h2>\n        <p><strong>First Name:</strong> <span id=\"edit-firstName\" class=\"editable\" contenteditable=\"true\">".concat(data.firstName, "</span></p>\n        <p><strong>Last Name:</strong> <span id=\"edit-lastName\" class=\"editable\" contenteditable=\"true\">").concat(data.lastName, "</span></p>\n        <p><strong>Gender:</strong> <span id=\"edit-gender\" class=\"editable\" contenteditable=\"true\">").concat(data.gender, "</span></p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\" contenteditable=\"true\">").concat(data.email, "</span></p>\n        <p><strong>Religion:</strong> <span id=\"edit-religion\" class=\"editable\" contenteditable=\"true\">").concat(data.religion, "</span></p>\n        <p><strong>Address:</strong> <span id=\"edit-address\" class=\"editable\" contenteditable=\"true\">").concat(data.address, "</span></p>\n        <p><strong>Mobile Number:</strong> <span id=\"edit-mobile\" class=\"editable\" contenteditable=\"true\">").concat(data.mobile, "</span></p>\n        <p><strong>Date of Birth:</strong> <span id=\"edit-dob\" class=\"editable\" contenteditable=\"true\">").concat(data.dob, "</span></p>\n        <p><strong>Nationality:</strong> <span id=\"edit-nationality\" class=\"editable\" contenteditable=\"true\">").concat(data.nationality, "</span></p>\n        <p><strong>Objectives:</strong> <span id=\"edit-objectives\" class=\"editable\" contenteditable=\"true\">").concat(data.objectives, "</span></p>\n        <p><strong>Skills:</strong> <span id=\"edit-skills\" class=\"editable\" contenteditable=\"true\">").concat(data.skills.join(', '), "</span></p>\n        <p><strong>Experience:</strong> <span id=\"edit-experience\" class=\"editable\" contenteditable=\"true\">").concat(data.experience, "</span></p>\n        <p><strong>Education:</strong> <span id=\"edit-education\" class=\"editable\" contenteditable=\"true\">").concat(data.education, "</span></p>\n        <button id=\"save-changes\">Save Changes</button>\n    ");
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (el) {
        el.addEventListener('blur', function (event) {
            var target = event.target;
            saveFieldEdit(target.id, target.innerText);
        });
    });
    var saveButton = document.getElementById('save-changes');
    saveButton.addEventListener('click', function () {
        alert('Resume changes saved successfully!');
        console.log('Updated Resume Data:', resumeData);
    });
}
function saveFieldEdit(fieldId, newValue) {
    switch (fieldId) {
        case 'edit-firstName':
            resumeData.firstName = newValue;
            break;
        case 'edit-lastName':
            resumeData.lastName = newValue;
            break;
        case 'edit-gender':
            resumeData.gender = newValue;
            break;
        case 'edit-email':
            resumeData.email = newValue;
            break;
        case 'edit-religion':
            resumeData.religion = newValue;
            break;
        case 'edit-address':
            resumeData.address = newValue;
            break;
        case 'edit-mobile':
            resumeData.mobile = newValue;
            break;
        case 'edit-dob':
            resumeData.dob = newValue;
            break;
        case 'edit-nationality':
            resumeData.nationality = newValue;
            break;
        case 'edit-objectives':
            resumeData.objectives = newValue;
            break;
        case 'edit-skills':
            resumeData.skills = newValue.split(',').map(function (skill) { return skill.trim(); });
            break;
        case 'edit-experience':
            resumeData.experience = newValue;
            break;
        case 'edit-education':
            resumeData.education = newValue;
            break;
    }
}
