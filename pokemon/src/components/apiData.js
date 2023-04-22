import axios from "axios";


export const getData = (param) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${param}`).then(
        (response) => {
            const data = response.json();

            console.log(data);
        }
    )
}