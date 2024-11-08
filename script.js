function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const photoInput = document.getElementById('photo').files[0];

    // Hide the input section and show resume preview in full screen
    document.getElementById('inputSection').style.display = 'none';
    document.getElementById('resumePreview').style.display = 'block';

    // Set resume content
    document.getElementById('resumeName').innerText = name;
    document.getElementById('resumeContent').innerHTML = `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/${linkedin}" target="_blank">${linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/${github}" target="_blank">${github}</a></p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Education:</strong> ${education}</p>
    `;

    // Display profile photo
    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('resumePhoto').src = event.target.result;
    };
    if (photoInput) {
        reader.readAsDataURL(photoInput);
    }
}

function downloadPDF() {
    // Hide the download button for PDF export
    const downloadButton = document.getElementById('downloadBtn');
    downloadButton.style.display = 'none';

    // Generate PDF
    const resumePreview = document.getElementById('resumePreview');
    html2pdf().from(resumePreview).set({
        margin: 0,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' }
    }).save().then(() => {
        // Show the download button again after download is complete
        downloadButton.style.display = 'block';
    });
}
