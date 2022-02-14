import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'
import { collection, query, onSnapshot, where, orderBy } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectServerId } from '../features/serverSlice';
import { selectChannelId } from '../features/channelSlice';

const useGetChannelPosts =  () => {
    const [channelPosts, setChannelPosts] = useState([]);
    const serverId = useSelector(selectServerId);
    const channelId = useSelector(selectChannelId);

    useEffect(() => {
        const q = query(collection(db, 'servers/' + serverId + '/txt-channels/' + channelId + '/posts'), orderBy('createdAt', 'asc'));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id })
            });
            setChannelPosts(documents)
        })

        return () => unsub();
    }, [serverId, channelId]);

    return { channelPosts };
}

export default useGetChannelPosts;