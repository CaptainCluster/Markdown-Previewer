//----------------------------------------------------------------------------//
// Made by CaptainCluster                                                     //
//                                                                            //
// Container that wraps up every single component for rendering               //
//----------------------------------------------------------------------------//

import React, { useState, useEffect } from "react";
import EditorWrap from "./editor_wrap";
import PreviewWrap from "./preview_wrap";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
import { DEFAULT_MARKDOWN } from "./editor_defaults";


/**
 * @returns {JSXComponent} A container containing all the JSX components
 */
export default function Container() {
    const [text, setText] = useState("");

    useEffect(() => {
        const markdown = marked.parse(DEFAULT_MARKDOWN);
        setText(markdown);
    }, [])

    const convertMarkdown = (event) => {
        const markdown = marked.parse(event.target.value);
        setText(markdown)
    }
    
    return (
        <div id="container">
            <EditorWrap  onTextChange={convertMarkdown} defaultText={DEFAULT_MARKDOWN}/>
            <PreviewWrap text={text}/>
        </div>
    );
}