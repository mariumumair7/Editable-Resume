interface ResumeData {
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    religion: string;
    address: string;
    mobile: string;
    dob: string;
    nationality: string;
    objectives: string;
    skills: string[];
    experience: string;
    education: string;
}

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLElement;
let resumeData: ResumeData;

// Handle form submission to generate the initial resume
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    resumeData = {
        firstName: (document.getElementById('first-name') as HTMLInputElement).value,
        lastName: (document.getElementById('last-name') as HTMLInputElement).value,
        gender: (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        religion: (document.getElementById('religion') as HTMLInputElement).value,
        address: (document.getElementById('address') as HTMLInputElement).value,
        mobile: (document.getElementById('mobile') as HTMLInputElement).value,
        dob: (document.getElementById('dob') as HTMLInputElement).value,
        nationality: (document.getElementById('country') as HTMLSelectElement).value,
        objectives: (document.getElementById('objectives') as HTMLTextAreaElement).value,
        skills: Array.from(document.querySelectorAll('input[name="skills"]:checked')).map((el) => (el as HTMLInputElement).value),
        experience: (document.getElementById('experience') as HTMLSelectElement).value,
        education: (document.getElementById('education') as HTMLSelectElement).value,
    };

    displayResume(resumeData);
});

function displayResume(data: ResumeData): void {
    resumeOutput.innerHTML = `
        <h2>Your Resume</h2>
        <p><strong>First Name:</strong> <span id="edit-firstName" class="editable" contenteditable="true">${data.firstName}</span></p>
        <p><strong>Last Name:</strong> <span id="edit-lastName" class="editable" contenteditable="true">${data.lastName}</span></p>
        <p><strong>Gender:</strong> <span id="edit-gender" class="editable" contenteditable="true">${data.gender}</span></p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable" contenteditable="true">${data.email}</span></p>
        <p><strong>Religion:</strong> <span id="edit-religion" class="editable" contenteditable="true">${data.religion}</span></p>
        <p><strong>Address:</strong> <span id="edit-address" class="editable" contenteditable="true">${data.address}</span></p>
        <p><strong>Mobile Number:</strong> <span id="edit-mobile" class="editable" contenteditable="true">${data.mobile}</span></p>
        <p><strong>Date of Birth:</strong> <span id="edit-dob" class="editable" contenteditable="true">${data.dob}</span></p>
        <p><strong>Nationality:</strong> <span id="edit-nationality" class="editable" contenteditable="true">${data.nationality}</span></p>
        <p><strong>Objectives:</strong> <span id="edit-objectives" class="editable" contenteditable="true">${data.objectives}</span></p>
        <p><strong>Skills:</strong> <span id="edit-skills" class="editable" contenteditable="true">${data.skills.join(', ')}</span></p>
        <p><strong>Experience:</strong> <span id="edit-experience" class="editable" contenteditable="true">${data.experience}</span></p>
        <p><strong>Education:</strong> <span id="edit-education" class="editable" contenteditable="true">${data.education}</span></p>
        <button id="save-changes">Save Changes</button>
    `;

    
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((el) => {
        el.addEventListener('blur', (event: Event) => {
            const target = event.target as HTMLElement;
            saveFieldEdit(target.id, target.innerText);
        });
    });

    
    const saveButton = document.getElementById('save-changes') as HTMLButtonElement;
    saveButton.addEventListener('click', () => {
        alert('Resume changes saved successfully!');
        console.log('Updated Resume Data:', resumeData);  
    });
}


function saveFieldEdit(fieldId: string, newValue: string): void {
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
            resumeData.skills = newValue.split(',').map((skill) => skill.trim());
            break;
        case 'edit-experience':
            resumeData.experience = newValue;
            break;
        case 'edit-education':
            resumeData.education = newValue;
            break;
    }
}
