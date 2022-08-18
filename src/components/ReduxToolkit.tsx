import {useEffect} from 'react';
import * as React from 'react';
import PostContainer from "./PostContainer";
import PostContainer2 from "./PostContainer2";

function ReduxToolkit() {
    return (
        <div className="App">
            <div style={{display: 'flex'}}>
                <PostContainer/>
                <PostContainer2/>
            </div>
        </div>
    );
}

export default ReduxToolkit;
