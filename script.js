document.addEventListener('DOMContentLoaded', function () {
    const snowflakeContainer = document.createElement('div');
    snowflakeContainer.classList.add('snowflakes');
    document.body.appendChild(snowflakeContainer);

    // Kar tanelerini oluştur
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄'; // Kar tanesi sembolü
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`; // Rastgele hız
        snowflakeContainer.appendChild(snowflake);
    }
});
