import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'
import { collection, query, onSnapshot, where } from "firebase/firestore";

const useFirestoreAuth = (aCollection, sName) => {
    const [serverChannels, setServerChannels] = useState([]);

    useEffect(() => {
        const q = query(collection(db, aCollection), where("serverName", "==", `${sName}`));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id })
            });
            setServerChannels(documents);
        })

        return () => unsub();
    }, [aCollection]);

    return { serverChannels };
}

export default useFirestoreAuth;