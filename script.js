const yesBtn = document.getElementById('yesBtn');

yesBtn.addEventListener('click', () => {
    // You can redirect to a new page:
    // window.location.href = "success.html";
    
    // Or just update the text on the current page:
    document.querySelector('.card').innerHTML = `
        <div class="emoji">💖</div>
        <h1 class="title">Yay!</h1>
        <p class="message">I knew you'd say yes! <br> See you on the 14th!</p>
    `;
});

