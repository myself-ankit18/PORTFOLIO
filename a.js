function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent('Subject: Your Subject Here');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    window.location.href = `mailto:aparnadam1981@gmail.com?subject=${subject}&body=${body}`;
}
