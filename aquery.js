document.getElementById('view-button').addEventListener('click', function() {
    const subject = document.getElementById('subject').value;
    const problem = document.getElementById('problem').value;

    if(subject && problem) {
        alert('The content is verified.');
    } else {
        alert('Please fill out both the subject and the problem.');
    }
});
