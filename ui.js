class UI {
    constructor() {
        this.kuralArticle = document.querySelector(".kural-article");
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

        // Error msg to be displayed
        this.error = document.querySelector(".error-msg");
    }

    displayKural(obj) {
        if ((this.kuralArticle.style.display = "none")) {
            this.kuralArticle.style.display = "block";
        }

        if ((this.error.style.display = "block")) this.error.style.display = "none";

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

    validation(msg) {
        const h2 = document.createElement("h2");
        h2.classList.add("alert");

        h2.innerHTML = msg;

        this.kuralArticle.style.display = "none";
        this.error.style.display = "block";
        this.error.innerHTML = "";
        this.error.append(h2);
    }
}