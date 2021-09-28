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
    const inputValue = document.getElementById("input-kural");

    console.log(inputValue);
    const inpKural = await kural.getData(inputValue.value);
    ui.displayKural(inpKural);
    inputValue.value = "";
};
submitBtn.addEventListener("click", handleSubmit);