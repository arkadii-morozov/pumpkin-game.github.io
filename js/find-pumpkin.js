$(window).on("load", init);

function init() {
    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    };

    function getRandomItem(min = 1, max = 5){
        let targetItem = 'i-' + randomInteger(min, max);
        return targetItem;
    };
    
    var itemRandom = getRandomItem();
    var resultBlock = $('.pop-up-result');
    var timeLoop = 10; // время раунда в секундах
    var timeIsOver = false;
    // start game
    countdown(timeLoop);

    $('.item').on('click', function (e) {
        var target = e.target.className;
        var targetString = target.substring(target.length - 3);
        if ( targetString == itemRandom && timeIsOver == false) {
            $(this).attr('src', 'pic/pumpkin-active.jpg');
            resultBlock.fadeIn(150);
            $('.is-winner').text('Вы выиграли!');
            //очищаем все интервалы
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearInterval(i); 
                clearTimeout(i);
            }                                   
        }
    });

    $('.button-repeat').on('click', function (e) {
        $('.item').each(function(){
            $(this).attr('src', 'pic/pumpkin-no-active.jpg');
        });
        itemRandom =  getRandomItem();
        $('.timer').text(10);
        resultBlock.fadeOut(150);        
        countdown(timeLoop);
    });
    
    function countdown(interval){  
        timeIsOver = false;      
        let time = interval;
        let timerid = setInterval(() => {            
            time = time-1;
            $('.timer').text(time);
        }, 1000);
        setTimeout(() => {
            clearInterval(timerid);
            timeIsOver = true;
            resultBlock.fadeIn(150);
            $('.is-winner').text('Вы проиграли!');
        }, interval*1000);
    };
}

