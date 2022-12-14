import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function search(event){
        event.preventDefault();
        let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiURL).then(handleResponse);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange}/>
                </form>
                <div className="hint">
                    suggested words: sunset, yoga, plant, wine..
                </div>
            </section>
            <Results results={results} />
        </div>
    )
}