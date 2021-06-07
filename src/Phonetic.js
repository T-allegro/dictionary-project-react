import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetic(props){
    function handleClick(){
        return (
        <ReactAudioPlayer 
            src={props.phonetic.audio}
        />
        )
    }

    return (
        <div className="Phonetic">
            <button onClick={handleClick}>
            <i class="fas fa-volume-up"></i>
            </button>
            {props.phonetic.text}
        </div>
    )
}

// <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
// <i class="fas fa-volume-up"></i>
// </a>
