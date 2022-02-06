import { onSnapshot, query, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase'

const useFirestore = (cName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionQuery = query(collection(db, cName));        
        const unsub = onSnapshot(collectionQuery, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {                
                documents.push({...doc.data(), id: doc.id});
            })
            setDocs(documents);
        });

        return() => unsub();
    }, [cName]);    

    return {docs};
}
export default useFirestore;