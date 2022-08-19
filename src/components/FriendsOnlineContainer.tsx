import React from 'react';
import {postAPI} from "../services/PostService";
import FriendItem from "./ui/FriendItem";

let styles = {
    marginTop: '200px',
};

const FriendsOnlineContainer = () => {
    const {data: friends, error, isLoading} =  postAPI.useFetchAllPostsQuery(100)
    return (
        <div>
            <div className="post__list" style={styles}>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {friends && friends.map(friend =>
                    <FriendItem key={friend.id} friend={friend}/>
                )}
            </div>
        </div>
    );
};


export default FriendsOnlineContainer;
