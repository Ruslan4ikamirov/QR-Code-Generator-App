const imgBox = document.getElementById('img-box');
const qrImage = document.getElementById('qrimage');
const qrText = document.getElementById('qrtext');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    if (qrText.value.length > 0) {
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img');
    }
    if (qrText.value.length === 0) {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
});

