//----------------------------------------------------------------------------//
// Made by CaptainCluster                                                     //
//                                                                            //
// Displays the HTML parsed with Marked                                       //
//----------------------------------------------------------------------------//
import React from "react";

export default function previewWrap({text}){
    return(
        <div id="preview-outer">
            <div id="preview" dangerouslySetInnerHTML={{__html: text}} />
        </div>
    )
}