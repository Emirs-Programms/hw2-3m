document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    
    document.body.appendChild(button);

    button.addEventListener('click', function() {
       
        console.log('Начало');
        alert('Начало')
        setTimeout(function() {
            console.log('2 секунды прошло');
            alert('Прошло 2 секунды')
            setTimeout(function() {
                console.log('3 секунды прошло');
                alert('Прошло 3 секунды')
                
                
                
                
                console.log('Начало работы Доп');
                alert('Начало работы доп задания ')

                setTimeout(function() {
                    console.log('Прошла 1 секунда');
                    alert('Прошла 1 секунды')
                }, 1000);

                let interval = setInterval(function() {
                    console.log('Прошло еще 2 секунды');
                    alert('Прошло еще 2 секунды');
                }, 2000);

                setTimeout(function() {
                    console.log('Прошло 10 секунд');
                    alert('Прошло 10 секунд')
                    clearInterval(interval);
                }, 10000);

            }, 1000);
        }, 2000);
    });
});alert('Конец')


