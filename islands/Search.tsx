import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";


export const Search: FunctionComponent = () => {
    
    const [word, setWord] = useState<string>("");
    const [error, setError] = useState<string>("");


    //si word esta vacio -> error
    const hayPalabra = () => {
        if(word === "") {
            setError("Please enter a word");
        }
    }

    //buscar en la api
    const dictionary = async () => {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

        const response = await fetch(url + word);
        const data = await response.json();
        return data;
    }


    

    return(
        <div class ="caja">
            <div class = "buscar">
                <input type="text" placeholder="Type a word" onInput={(w) => setWord(w.currentTarget.value)} onBlur={() => hayPalabra()}></input>
                <button type="submit">Search</button>
                {error !== "" && <div>{error}</div>}
            </div>

        </div>
    )

}