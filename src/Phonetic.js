import React, {useState} from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props){
    const [play, setPlay]=useState(false);

    function handleClick(){
        setPlay(true);
    }    

    return (
        <div className="Phonetic">
            <button onClick={handleClick}>
            <i class="fas fa-volume-up"></i>
            </button>
            {props.phonetic.text}
            {play && (
            <ReactAudioPlayer 
            src={props.phonetic.audio}
            autoPlay
            onEnded={()=> setPlay(false)}
        />
    )}
        </div>
    );
}

// <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
// <i class="fas fa-volume-up"></i>
// </a>
