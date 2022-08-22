import * as React from 'react';
import FriendsContainer from "./FriendsContainer";
// import FriendsOnlineContainer from "./FriendsOnlineContainer";

function FriendsWrap() {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <FriendsContainer/>
                {/*<FriendsOnlineContainer/>*/}
            </div>
        </div>
    );
}

export default FriendsWrap;
