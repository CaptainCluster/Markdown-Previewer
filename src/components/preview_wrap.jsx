//----------------------------------------------------------------------------//
// Made by CaptainCluster                                                     //
//                                                                            //
// Displays the HTML parsed with Marked                                       //
//----------------------------------------------------------------------------//
import React from "react";

/**
 * @param   {string} text   The HTML (within the string) that will be displayed in markdown 
 * @returns {JSXComponent}  The preview component
 */
export default function previewWrap({text}){
    return(
        <div id="preview-outer">
            <div id="preview" dangerouslySetInnerHTML={{__html: text}} />
        </div>
    )
}