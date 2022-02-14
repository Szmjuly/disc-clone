import { onSnapshot, query, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { db } from '../firebase/firebase'

const useFirestore = (cName) => {
    const [docs, setDocs] = useState([]);
    const currentUser = useSelector(selectUser);
    
    useEffect(() => {
        const collectionQuery = query(collection(db, 'users/' + currentUser.uid + '/servers'));        
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