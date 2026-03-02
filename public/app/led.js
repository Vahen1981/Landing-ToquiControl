const ledA = document.getElementById('led-a');
const ledB = document.getElementById('led-b');
const ledC = document.getElementById('led-c');
const ledUp = document.getElementById('led-up');
const ledDown = document.getElementById('led-down');
const ledPc = document.getElementById('led-mode-pc');
const ledCc = document.getElementById('led-mode-cc');
const controlLeds = [ledA, ledB, ledC, ledUp, ledDown, ledPc, ledCc];
let interval = [];
let blinking = false;

// blinkLed(ledA,200);
// blinkLed(ledB,200);
// blinkLed(ledC,200);
// blinkLed(ledUp,200);
// blinkLed(ledDown,200);
// blinkLed(ledPc,200);
// blinkLed(ledCc,200);

function blinkLed(led, time){
    let ledIsOn = false;
    let image;
    let index;
    for(let i = 0 ; i < 7 ; i++){
        if( led === controlLeds[i]){
            index = i;
        }
    }
    if(led === ledUp || led === ledDown){
        image = 'ledRojo.png';
    }
    else if(led === ledA || led === ledB || led === ledC || led === ledCc){
        image = 'ledVerde.png';
    }
    else if(led === ledPc){
        image = 'ledAzul.png';
    }
    interval[index] = setInterval(() => {
        switch(ledIsOn){
            case true:
                led.style.removeProperty('background-image');
                ledIsOn = false;
                break;
            case false:
                led.style.backgroundImage = `url('src/images/${image}')`;
                ledIsOn = true;
                break;
        }       
    }, time);
}

function alternateTwoLeds(led1, led2, time){
    let ledIsOn = false;
    let image = [];
    let leds = [led1, led2];
    let index;
    for(let i = 0 ; i < 7 ; i++){
        if( led1 === controlLeds[i]){
            index = i;
        }
    }
    for(let i = 0 ; i < 2 ; i++){
        if(leds[i] === ledUp || leds[i] === ledDown){
            image[i] = 'ledRojo.png';
        }
        else if(leds[i] === ledA || leds[i] === ledB || leds[i] === ledC || leds[i] === ledCc){
            image[i] = 'ledVerde.png';
        }
        else if(leds[i] === ledPc){
            image[i] = 'ledAzul.png';
        }
    }

    interval[index] = setInterval(() => {
        switch(ledIsOn){
            case true:
                led1.style.removeProperty('background-image');
                led2.style.backgroundImage = `url('src/images/${image[1]}')`;
                ledIsOn = false;
                break;
            case false:
                led2.style.removeProperty('background-image');
                led1.style.backgroundImage = `url('src/images/${image[0]}')`;
                ledIsOn = true;
                break;
        }       
    }, time);
}

function encender(led){
    let image;
    if(led === ledUp || led === ledDown){
        image = 'ledRojo.png';
    }
    else if(led === ledA || led === ledB || led === ledC || led === ledCc){
        image = 'ledVerde.png';
    }
    else if(led === ledPc){
        image = 'ledAzul.png';
    }
    led.style.backgroundImage = `url('src/images/${image}')`;
}

function apagar(led){
    led.style.removeProperty('background-image');
}

ledPc.style.backgroundImage = "url('src/images/ledAzul.png')";