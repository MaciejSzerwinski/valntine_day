function handleAnswer(answer) {
    const response = document.getElementById('response');
    if (answer === 'yes') {
        response.textContent = 'Great! Keep coding!';
    } else {
        response.textContent = 'Oh no! Maybe give it another try!';
    }
}
