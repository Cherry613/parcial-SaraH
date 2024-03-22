import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Resultado} from "../types.ts"


export const Search: FunctionComponent = () => {
    
    const [word, setWord] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [resultado, setResultado] = useState<Resultado>();

    const diccionario: Resultado[] = [];

    //si word esta vacio -> error
    const hayPalabra = () => {
        if(word === "") {
            setError("Please enter a word");
        }
    }

    //buscar en la api
    const dictionary = async (p) => {
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";

        const response = await fetch(url + p);
        const data = await response.json();
        
        //data->meanings->definitions
        data.map((elem)=> {
           setResultado(elem.meanings.definitions);
        })    
    }


    return(
        <div>
            <div class ="caja">
                <div class = "buscar">
                    <input type="text" placeholder="Type a word" onInput={(w) => setWord(w.currentTarget.value)} onBlur={() => hayPalabra()}/>
                    <button type="submit" disabled={error !== ""} onClick={()=>dictionary(word)}>Search</button>                
                </div>
                <div>
                {error !== "" && <div class="error">{error}</div>}
                </div>
            </div>
            <div class ="caja">
                {diccionario.length !== 0 && <div>{word}</div>}
            </div>
        </div>
    )
}