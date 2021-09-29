const kural = new FetchApi();
const ui = new UI();

const submitBtn = document.querySelector(".submit-btn");

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
};

const init = async() => {
    const randNum = randomNumber(1, 1330);

    const randomKural = await kural.getData(randNum);

    console.log(randomKural);

    //Displaying the Kural
    ui.displayKural(randomKural);
};

// Initializing the random Kural and displaying in the screen
init();

const handleSubmit = async(e) => {
    e.preventDefault();
    const inputEl = document.getElementById("input-kural");

    const inputValue = inputEl.valueAsNumber;

    if (inputValue > 0 && inputValue < 1330) {
        const inpKural = await kural.getData(inputValue);
        ui.displayKural(inpKural);
    } else {
        ui.validation("Please enter a number between 1 and 1330.");
    }

    inputEl.value = "";
};
submitBtn.addEventListener("click", handleSubmit);