import * as React from 'react';
import {FC} from 'react';
import {IFriend} from "../../../models/IFriend";

interface FriendItemProps {
    friend: IFriend;
    remove: (friend: IFriend) => void;
    update: (friend: IFriend) => void;
}

const FriendItem: FC<FriendItemProps> = ({friend, remove, update}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(friend)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const FIO = prompt('Введите имя друга') || ""
        update({...friend, FIO})
    }

    return (
        <div className="friend" onClick={handleUpdate}>
            {friend.id}. {friend.firstname} {friend.lastname}
            <img src={friend.avatarUrl} alt="avatar"/>
            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default FriendItem;
