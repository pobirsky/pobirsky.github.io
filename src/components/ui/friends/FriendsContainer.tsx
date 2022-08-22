import * as React from 'react'
import {useEffect, useState} from 'react';
import {friendAPI} from "../../../services/PostService";
import FriendItem from "./FriendItem";
import {IFriend} from "../../../models/IFriend";

const FriendsContainer = () => {
    const [limit] = useState(100);
    const {data: friends, error, isLoading} =  friendAPI.useFetchAllPostsQuery(limit)
    const [createPost] = friendAPI.useCreatePostMutation()
    const [updatePost] = friendAPI.useUpdatePostMutation()
    const [deletePost] = friendAPI.useDeletePostMutation()

    useEffect(() => {
        // setTimeout(() => {
        //     setLimit(3)
        // }, 2000)
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IFriend)
    }

    const handleRemove = (post: IFriend) => {
        deletePost(friends)
    }

    const handleUpdate = (post: IFriend) => {
        updatePost(friends)
    }

    return (
        <div>
            <div className="post">

                <button onClick={handleCreate}>Добавить нового друга</button>
                {isLoading && <h1>Идет загрузка...</h1>}
                {error && <h1>Произошла ошибка при загрузке</h1>}
                {friends && friends.map(friend =>
                    <FriendItem remove={handleRemove} update={handleUpdate} key={friend.id} friend={friend}/>
                )}
            </div>
        </div>
    );
};

export default FriendsContainer;
