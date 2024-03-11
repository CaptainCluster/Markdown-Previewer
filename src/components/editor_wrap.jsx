//----------------------------------------------------------------------------//
// Made by CaptainCluster                                                     //
//                                                                            //
// A .jsx file that contains the editor component, where the user will write  //
// text that will be parsed into markdown.                                    //
//----------------------------------------------------------------------------//
import React from "react";

/**
 * @param   {onTextChange}          Event handler in order to do markdown conversion
 * @param   {string} defaultText    The default text to be displayed in the textarea
 * @returns {JSXComponent}          The editor component
 */
export default function EditorWrap({ onTextChange, defaultText }) {
    return ( 
        <div id="editor-outer">
            <textarea type="text" onChange={onTextChange} defaultValue={defaultText} id="editor"></textarea>
        </div>
    );
}
