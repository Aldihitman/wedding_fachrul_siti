function convertToWhatsApp() {
    var name = document.getElementById('name').value;
    var comment = document.getElementById('ucapan').value;
    var phoneNumber = '087730701989'; // Ganti dengan nomor telepon tujuan Anda
    var message = 'Nama: ' + name + '\nKomentar: ' + comment;
    var whatsappLink = 'https://wa.me/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.location.href = whatsappLink;
}
