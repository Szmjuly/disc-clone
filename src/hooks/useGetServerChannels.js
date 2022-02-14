import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'
import { collection, query, onSnapshot } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectServerId } from '../features/serverSlice';

const useGetServerChannels = ( cCollection ) => {
    const [serverChannels, setServerChannels] = useState([]);
    const serverId = useSelector(selectServerId);

    useEffect(() => {
        const q = query(collection(db, 'servers/' + serverId + cCollection));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id })
            });
            setServerChannels(documents)
        })

        return () => unsub();
    }, [cCollection, serverId]);

    return { serverChannels };
}

export default useGetServerChannels;