const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open')
});


document.getElementById('playVideo').addEventListener('click', function() {
    var video = document.getElementById('videoPlayer');
    var closeBtn = document.getElementById('closeVideo');
    
    // Отображаем видео и кнопку закрытия
    video.style.display = 'block';
    closeBtn.style.display = 'block';

    // Устанавливаем класс для полноэкранного режима
    video.classList.add('fullscreen');
    
    // Включаем автопроигрывание
    video.play();

    // Запускаем видео в полноэкранный режим
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE11
        video.msRequestFullscreen();
    }

    // Зацикливаем видео
    video.addEventListener('ended', function() {
        video.currentTime = 0; // Перематываем к началу
        video.play(); // Снова запускаем видео
    });
});

// Обработчик для кнопки закрытия
document.getElementById('closeVideo').addEventListener('click', function() {
    var video = document.getElementById('videoPlayer');
    var closeBtn = document.getElementById('closeVideo');

    // Останавливаем видео и убираем с экрана
    video.pause();
    video.style.display = 'none';
    closeBtn.style.display = 'none';
    video.classList.remove('fullscreen');

    // Выходим из полноэкранного режима
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE11
        document.msExitFullscreen();
    }
});
