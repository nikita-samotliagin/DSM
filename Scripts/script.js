document.getElementById('attachmentImage').addEventListener('click', function() {
    document.getElementById('fileInput').click(); // Имитируем клик по input
});

function initMap() {
    var location = { lat: 55.751244, lng: 37.618423 }; // Укажите координаты
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Обработчик отправки формы
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы

    // Открываем модальное окно
    document.getElementById("myModal").style.display = "block";

    // Очищаем форму (по желанию)
    this.reset();
});

// Закрываем модальное окно по нажатию на крестик
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById("myModal").style.display = "none";
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}