document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});


function copyAddress() {
    var addressSpan = document.getElementById('address');
    var address = addressSpan.textContent;

    // Create a temporary textarea element
    var textarea = document.createElement('textarea');
    textarea.value = address;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the textarea
    document.body.removeChild(textarea);

    // Change text to "Copied"
    addressSpan.classList.add('copied');

    // Reset text after 2 seconds
    setTimeout(function() {
        addressSpan.classList.remove('copied');
    }, 2000);
}