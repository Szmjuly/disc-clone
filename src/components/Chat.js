//React
import { useState } from 'react';

//Styling
import '../css/Chat.css'
import '../css/ChatInput.css'

//Icons
import { EmojiEmotions, AddAPhoto, Send, SettingsInputCompositeTwoTone } from '@mui/icons-material';

//Components
import Msg from '../components/Msg.js'

//Firebase and Redux
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {db} from '../firebase/firebase'
import { selectServerId } from '../features/serverSlice';
import { selectChannelId } from '../features/channelSlice';
import useGetChannelPosts from '../hooks/useGetChannelPosts';

export default function Chat() {
  const [post, setPost] = useState('');
  const serverId = useSelector(selectServerId);
  const channelId = useSelector(selectChannelId);
  const currentUser = useSelector(selectUser);
  const {channelPosts} = useGetChannelPosts();

  function handlePostMsg(e){
    e.preventDefault();
    addDoc(collection(db, 'servers/' + serverId + '/txt-channels/' + channelId + '/posts'), {
      content: post,
      createdAt: serverTimestamp(),
      user: currentUser.displayName,
      userEmail: currentUser.email,
      userPhoto: currentUser.photo,
      isDeleted: false,
    })
    .then(() => {
      setPost('');
    })
    .catch((err) => {
      console.log("🚀 ~ file: Chat.js ~ line 28 ~ handlePostMsg ~ err", err);
    })
  }
  return <section className='chat'>
            <section className='chat__msgs'>
                {channelPosts.map((channelPost) => (
                  <div key={channelPost.id}>
                    <Msg user={channelPost.user} userPhoto={channelPost.userPhoto} content={channelPost.content} timestamp={channelPost.createdAt}/>
                  </div>
                ))}
            </section>
            
            <section className='chat__input'>
            <form onSubmit={handlePostMsg}>
              <textarea type={'text'} placeholder='Say Something...' maxLength={252} rows={1} value={post} onChange={((e) => { setPost(e.target.value);})}/>
              <section className='chat__inputIcons' >
                <EmojiEmotions fontSize='medium'/>
                <AddAPhoto fontSize='medium' />
              </section>
              <button type='submit' className='send btn'><Send fontSize='small'/></button>
            </form>
        </section>

        </section>;
}