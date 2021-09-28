class FetchApi {
    constructor() {
        this.url = "https://api-thirukkural.vercel.app/api?num=";
    }

    async getData(number) {
        console.log(this.url + number);
        const data = await fetch(this.url + number);
        const res = await data.json();
        return res;
    }
}