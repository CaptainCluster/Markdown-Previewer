//----------------------------------------------------------------------------//
// Made by CaptainCluster                                                     //
//                                                                            //
// A .jsx file that contains the editor component, where the user will write  //
// text that will be parsed into markdown.                                    //
//----------------------------------------------------------------------------//
import React from "react";

/**
 * 
 * @param {}
 * @returns A div element that contains the textarea where the user writes text
 */
export default function EditorWrap({ onTextChange, defaultText }) {
    return ( 
        <div id="editor-outer">
            <textarea type="text" onChange={onTextChange} defaultValue={defaultText} id="editor"></textarea>
        </div>
    );
}
