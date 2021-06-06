import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary (){
    let [keyword, setKeyword]=useState("");
    let [results, setResults]=useState(null);
    let [photos, setPhotos]=useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0])
    }

    function handlePexelsResponse (response){
        setPhotos(response.data.photos)

    }
    
    function search(event){
     event.preventDefault();   

     // documentation: https://dictionaryapi.dev/

     let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
     axios.get(apiUrl).then(handleDictionaryResponse);

     let pexelsApiKey="563492ad6f9170000100000189f5e8eae14d48028417b02b38323fb7";
     let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
     let headers={Authorization: `Bearer ${pexelsApiKey}`};
     axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
    

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
                Suggested words: sunset, happiness, wine, pilates...
            </div>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
        </div>
    );    
}