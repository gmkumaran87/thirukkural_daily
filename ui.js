class UI {
    constructor() {
        this.athikaram = document.querySelector(".athikaram");
        this.paal = document.querySelector(".paal");
        this.iyal = document.querySelector(".iyal");
        this.kuralNumber = document.querySelector(".kural-numb");

        //Main Kural
        this.kuralFirstLine = document.querySelector(".line-1");
        this.kuralSecondLine = document.querySelector(".line-2");

        this.explanation = document.querySelector(".explanation");

        this.kuralEnglish = document.querySelector(".eng-kural");
        this.kuralEngExp = document.querySelector(".eng-explanation");
    }

    displayKural(obj) {
        this.athikaram.innerHTML = obj.chap_tam;
        this.paal.innerHTML = obj.sect_tam;
        this.iyal.innerHTML = obj.chapgrp_tam;
        this.kuralNumber.innerHTML = obj.number;

        this.kuralFirstLine.innerHTML = obj.line1;
        this.kuralSecondLine.innerHTML = obj.line2;

        this.explanation.innerHTML = obj.tam_exp;

        this.kuralEnglish.innerHTML = obj.eng;
        this.kuralEngExp.innerHTML = obj.eng_exp;
    }
}