const Az = document.getElementById('Az');
const Ct = document.getElementById('Ct');
const So = document.getElementById('So');
const Sh = document.getElementById('Sh');
const complexitys = document.querySelector('.complexitys');
const complexity = document.querySelectorAll('.complexity');
const go = document.querySelector('.go');
const game = document.querySelector('.game');
const ancCard = document.querySelectorAll('.anc__card');
const deckCard = document.querySelector('.deck__card');
const veryEasy = document.querySelector('.very__easy');
const easy = document.querySelector('.easy');
const normal = document.querySelector('.normal');
const hard = document.querySelector('.hard');
const veryHard = document.querySelector('.very__hard');





for (let i = 0; i < ancCard.length; i++) {
    ancCard[i].addEventListener('click', () => {
        complexitys.classList.add('flex');
        for (let k = 0; k<ancCard.length; k++){
            ancCard[k].classList.remove('red'); 
        };
        for (let k = 0; k<complexity.length; k++){
            complexity[k].classList.remove('redCo'); 
        };
        game.classList.remove('flex');
        go.classList.remove('flex');
        ancCard[i].classList.add('red');  
    })

};

for (let i = 0; i<complexity.length; i++ ) {
    complexity[i].addEventListener('click', () => {
        game.classList.remove('flex');
        go.classList.add('flex');
        for (let k = 0; k<complexity.length; k++){
            complexity[k].classList.remove('redCo'); 
        };
        complexity[i].classList.add('redCo');
    })

}





// Az.addEventListener('click', () => {

//     Az
// })

// Ct.addEventListener('click', () => {
//     complexitys.classList.add('flex');
//     Ct.classList.add('red')
// })

// So.addEventListener('click', () => {
//     complexitys.classList.add('flex');
//     So.classList.add('red')
// })

// Sh.addEventListener('click', () => {
//     complexitys.classList.add('flex');
//     Sh.classList.add('red')
// })









let blue1 = document.createElement("img");
let blue2 = document.createElement("img");
let blue3 = document.createElement("img");
let blue4 = document.createElement("img");
let blue5 = document.createElement("img");
let blue6 = document.createElement("img");
let blue7 = document.createElement("img");
let blue8 = document.createElement("img");
let blue9 = document.createElement("img");
let blue10 = document.createElement("img");
let blue11 = document.createElement("img");
let blue12 = document.createElement("img");



let brown1 = document.createElement("img");
let brown2 = document.createElement("img");
let brown3 = document.createElement("img");
let brown4 = document.createElement("img");
let brown5 = document.createElement("img");
let brown6 = document.createElement("img");
let brown7 = document.createElement("img");
let brown8 = document.createElement("img");
let brown9 = document.createElement("img");
let brown10 = document.createElement("img");
let brown11 = document.createElement("img");
let brown12 = document.createElement("img");
let brown13 = document.createElement("img");
let brown14 = document.createElement("img");
let brown15 = document.createElement("img");
let brown16 = document.createElement("img");
let brown17 = document.createElement("img");
let brown18 = document.createElement("img");
let brown19 = document.createElement("img");
let brown20 = document.createElement("img");
let brown21 = document.createElement("img");


let green1 = document.createElement("img");
let green2 = document.createElement("img");
let green3 = document.createElement("img");
let green4 = document.createElement("img");
let green5 = document.createElement("img");
let green6 = document.createElement("img");
let green7 = document.createElement("img");
let green8 = document.createElement("img");
let green9 = document.createElement("img");
let green10 = document.createElement("img");
let green11 = document.createElement("img");
let green12 = document.createElement("img");
let green13 = document.createElement("img");
let green14 = document.createElement("img");
let green15 = document.createElement("img");
let green16 = document.createElement("img");
let green17 = document.createElement("img");
let green18 = document.createElement("img");



blue1.src = "./assets/MythicCards/blue/blue1.png";
blue2.src = "./assets/MythicCards/blue/blue2.png";
blue3.src = "./assets/MythicCards/blue/blue3.png";
blue4.src = "./assets/MythicCards/blue/blue4.png";
blue5.src = "./assets/MythicCards/blue/blue5.png";
blue6.src = "./assets/MythicCards/blue/blue6.png";
blue7.src = "./assets/MythicCards/blue/blue7.png";
blue8.src = "./assets/MythicCards/blue/blue8.png";
blue9.src = "./assets/MythicCards/blue/blue9.png";
blue10.src = "./assets/MythicCards/blue/blue10.png";
blue11.src = "./assets/MythicCards/blue/blue11.png";
blue12.src = "./assets/MythicCards/blue/blue12.png";


brown1.src = "./assets/MythicCards/brown/brown1.png";
brown2.src = "./assets/MythicCards/brown/brown2.png";
brown3.src = "./assets/MythicCards/brown/brown3.png";
brown4.src = "./assets/MythicCards/brown/brown4.png";
brown5.src = "./assets/MythicCards/brown/brown5.png";
brown6.src = "./assets/MythicCards/brown/brown6.png";
brown7.src = "./assets/MythicCards/brown/brown7.png";
brown8.src = "./assets/MythicCards/brown/brown8.png";
brown9.src = "./assets/MythicCards/brown/brown9.png";
brown10.src = "./assets/MythicCards/brown/brown10.png";
brown11.src = "./assets/MythicCards/brown/brown11.png";
brown12.src = "./assets/MythicCards/brown/brown12.png";
brown13.src = "./assets/MythicCards/brown/brown13.png";
brown14.src = "./assets/MythicCards/brown/brown14.png";
brown15.src = "./assets/MythicCards/brown/brown15.png";
brown16.src = "./assets/MythicCards/brown/brown16.png";
brown17.src = "./assets/MythicCards/brown/brown17.png";
brown18.src = "./assets/MythicCards/brown/brown18.png";
brown19.src = "./assets/MythicCards/brown/brown19.png";
brown20.src = "./assets/MythicCards/brown/brown20.png";
brown21.src = "./assets/MythicCards/brown/brown21.png";


green1.src = "./assets/MythicCards/green/green1.png";
green2.src = "./assets/MythicCards/green/green2.png";
green3.src = "./assets/MythicCards/green/green3.png";
green4.src = "./assets/MythicCards/green/green4.png";
green5.src = "./assets/MythicCards/green/green5.png";
green6.src = "./assets/MythicCards/green/green6.png";
green7.src = "./assets/MythicCards/green/green7.png";
green8.src = "./assets/MythicCards/green/green8.png";
green9.src = "./assets/MythicCards/green/green9.png";
green10.src = "./assets/MythicCards/green/green10.png";
green11.src = "./assets/MythicCards/green/green11.png";
green12.src = "./assets/MythicCards/green/green12.png";
green13.src = "./assets/MythicCards/green/green13.png";
green14.src = "./assets/MythicCards/green/green14.png";
green15.src = "./assets/MythicCards/green/green15.png";
green16.src = "./assets/MythicCards/green/green16.png";
green17.src = "./assets/MythicCards/green/green17.png";
green18.src = "./assets/MythicCards/green/green18.png";

let brownss = [
    brown1,
    brown2,
    brown3,
    brown4,
    brown5,
    brown6,
    brown7,
    brown8,
    brown9,
    brown10,
    brown11,
    brown12,
    brown13,
    brown14,
    brown15,
    brown16,
    brown17,
    brown21,
    brown18,
    brown19,
    brown20,
    brown21,
]





// ----------------BROWN-----------


let brownEasy = [
    brown11,
    brown12,
    brown13,
    brown14,
    brown21,
]

let brownNorm = [
    brown1,
    brown2,
    brown3,
    brown4,
    brown5,
    brown15,
    brown16,
    brown17,
    brown21,
    brown18,
    brown19,
    brown20,
]

let brownHard = [
    brown6,
    brown7,
    brown8,
    brown9,
    brown10,
]



// ---------------BLUE-----------------

let blueEasy = [
    blue3,
    blue4,
    blue5,
    blue10,
]

let blueNorm = [
    blue7,
    blue9,
    blue11,
    blue12,
]

let blueHard = [
    blue1,
    blue2,
    blue6,
    blue8,
]


// ----------------GREEN---------------------

let greenEasy = [
    green1,
    green12,
    green16,
    green17,
    green18,
]

let greenNorm = [
    green7,
    green8,
    green9,
    green10,
    green11,
    green13,
    green14,
    green15,
]

let greenHard = [
    green2,
    green3,
    green4,
    green5,
    green6,
]

let azathothEasyDeck = [];

let greenAz = 5;
let brownAz = 9;
let blueAz = 2;

let greenCt = 4;
let brownCt = 9;
let blueCt = 2;

let greenSo = 5;
let brownSo = 9;
let blueSo = 2;

let greenSh = 6;
let brownSh = 8;
let blueSh = 2;




// ---------------- VERY EASY ------------------------------------



const veryEasyMixAz = () => {
    for (let i = 0; i < greenAz; i++) {
        azathothEasyDeck.push(greenEasy.splice(0, 1)[0])
        // console.log('tgtg');
    };
    for (let i = 0; i < brownAz; i++) {
        if (brownEasy.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownEasy.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueAz; i++) {
        azathothEasyDeck.push(blueEasy.splice(0, 1)[0])
        // console.log('tgtg');
    };
}

// veryEasyMixAz();







const veryEasyMixCt = () => {
    for (let i = 0; i < greenCt; i++) {
        azathothEasyDeck.push(greenEasy.splice(0, 1)[0])
        // console.log('tgtg');
    };
    for (let i = 0; i < brownCt; i++) {
        if (brownEasy.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownEasy.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueCt; i++) {
        azathothEasyDeck.push(blueEasy.splice(0, 1)[0])
        // console.log('tgtg');
    };
}

// veryEasyMixCt();







const veryEasyMixSo = () => {
    for (let i = 0; i < greenSo; i++) {
        azathothEasyDeck.push(greenEasy.splice(0, 1)[0])
        // console.log('tgtg');
    };
    for (let i = 0; i < brownSo; i++) {
        if (brownEasy.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownEasy.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueSo; i++) {
        azathothEasyDeck.push(blueEasy.splice(0, 1)[0])
        // console.log('tgtg');
    };
}

// veryEasyMixSo();






const veryEasyMixSh = () => {
    for (let i = 0; i < greenSh; i++) {
        if (greenEasy.length === 0) {
            azathothEasyDeck.push(greenNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(greenEasy.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < brownSh; i++) {
        if (brownEasy.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownEasy.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueSh; i++) {
        azathothEasyDeck.push(blueEasy.splice(0, 1)[0])
        // console.log('tgtg');
    };

}

// veryEasyMixSh();

// ------------------- EASY -----------------------------------------


const easyMix = () => {
    azathothEasyDeck = brownNorm.concat(brownEasy).concat(blueEasy).concat(blueNorm).concat(greenEasy).concat(greenNorm);
}


// -------------------- NORM ------------------------------------------

const normMix = () => {
    azathothEasyDeck = brownNorm.concat(brownEasy).concat(blueEasy).concat(blueNorm).concat(greenEasy).concat(greenNorm).concat(greenHard).concat(brownHard).concat(blueHard);
}



// -------------------- HARD ----------------------------------------


const hardMix = () => {
    azathothEasyDeck = brownNorm.concat(blueNorm).concat(greenNorm).concat(greenHard).concat(brownHard).concat(blueHard);
}


// --------------------- VERY HARD ----------------------------------------


const veryHardMixAz = () => {
    for (let i = 0; i < greenAz; i++) {
        azathothEasyDeck.push(greenHard.splice(0, 1)[0])
        // console.log('tgtg');
    };
    for (let i = 0; i < brownAz; i++) {
        if (brownHard.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownHard.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueAz; i++) {
        azathothEasyDeck.push(blueHard.splice(0, 1)[0])
        // console.log('tgtg');
    };
}


const veryHardMixCt = () => {
    for (let i = 0; i < greenCt; i++) {
        azathothEasyDeck.push(greenHard.splice(0, 1)[0])
        // console.log('tgtg');
    };
    for (let i = 0; i < brownCt; i++) {
        if (brownHard.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownHard.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueCt; i++) {
        azathothEasyDeck.push(blueHard.splice(0, 1)[0])
        // console.log('tgtg');
    };
}

const veryHardMixSo = () => {
    for (let i = 0; i < greenSo; i++) {
        azathothEasyDeck.push(greenHard.splice(0, 1)[0])
        // console.log('tgtg');
    };
    for (let i = 0; i < brownSo; i++) {
        if (brownHard.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownHard.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueSo; i++) {
        azathothEasyDeck.push(blueHard.splice(0, 1)[0])
        // console.log('tgtg');
    };
}


const veryHardMixSh = () => {
    for (let i = 0; i < greenSh; i++) {
        if (greenHard.length === 0) {
            azathothEasyDeck.push(greenNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(greenHard.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < brownSh; i++) {
        if (brownHard.length === 0) {
            azathothEasyDeck.push(brownNorm.splice(0, 1)[0])
        } else {
            azathothEasyDeck.push(brownHard.splice(0, 1)[0])
        }
        // console.log('tgtg');
    };
    for (let i = 0; i < blueSh; i++) {
        azathothEasyDeck.push(blueHard.splice(0, 1)[0])
        // console.log('tgtg');
    };
}



// ----------------------------------------LOGIC ----------
// 
//                             LOGIC
// 
// ---------------- LOGIC -------------------------------



go.addEventListener('click', () => {
    if (Az.classList.contains('red')) {
        if (veryEasy.classList.contains('redCo')) {
            veryEasyMixAz();
        } else {
            veryHardMixAz();
        };
    } else {
        veryEasyMixAz();
    };
    go.classList.remove('flex');
    game.classList.add('flex');
});




// go.addEventListener('click', 
// veryEasyMixAz());




















deckCard.addEventListener('click', () => {
    
})

// veryHardMixSh()




function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}










const openCard = document.querySelector('.open__card');
openCard.appendChild(arrayRandElement(azathothEasyDeck));


console.log(azathothEasyDeck);

// console.log(openCard.childNodes[1])
let fChild = openCard.childNodes[1];
fChild.classList.add('card');
// console.log(cards[2]);


