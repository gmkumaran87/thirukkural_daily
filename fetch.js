class FetchApi {
    constructor() {
        this.url = "https://api-thirukkural.vercel.app/api?num=";
    }
    async getData(number) {
        const data = await fetch(this.url + number);
        const res = await data.json();
    }
}