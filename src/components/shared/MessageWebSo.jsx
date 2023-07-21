import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../reducers/usersReduce';
import { AiFillMessage } from 'react-icons/ai';
import { contextProvider } from '../../contextProviders/AuthProvider';
import moment from 'moment/moment';

const MessageWebSo = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const userDonors = useSelector((state) => state.users?.data);
  const donor = userDonors?.find(user => user._id == id)
  const { user } = useContext(contextProvider);
  const [message, setMessage] = useState('');
  const [newSocket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
// console.log(user)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000/');
    setSocket(socket);
    // WebSocket event handlers
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
      console.log('Received message:', event.data);
      const receivedMessage ={
        message: event.data,
        senderName: user?.displayName || 'User',
        isUser: true,
        date: Date(),
      }
      setMessages((prevMessages) => [...prevMessages, receivedMessage])
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
    };

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newSocket && message) {
      newSocket.send(message);
      setMessage('');
    }
  };
  return (
    <div className='w-full md:m-10 m-3 '>
      <div>
        <img src={donor?.photo} alt="" className='w-[200px] h-[200px] rounded-full md:mx-auto mx-4 ' />
        <h2 className='text-center font-bold text-xl'>{donor?.name}</h2>
      </div>

    <div className='md:w-1/2 md:mx-auto bg-slate-200 p-10 mt-4 me-5 rounded-lg'>
    <div className='md:w-1/2 md:mx-auto mx-4'>
         
         {
           messages.map(({message, senderName, isUser, date}, i) => 
           <div key={i} >
            {
              senderName != user.displayName && <><p>I am not available</p></>
            }
             <p  className={isUser ? 'text-blue-600 inline-flex' : 'black'}> {senderName}: 
            {message}    
            <span className='text-xs ms-1 mt-2'>{moment(date).format('h:mm a')}  </span>  </p>
           </div>
            )
         }
          
       </div>
       <form action="" className='md:w-1/2 md:mx-auto h-full mt-5 overflow-auto' onSubmit={handleSendMessage}>
 
         <input type="text" placeholder='message' className='border rounded-xl p-2' value={message}
           onChange={(e) => setMessage(e.target.value)} />
 
         <button type='submit'><AiFillMessage className='w-6 h-6 text-red-700 mt-3 ms-1'></AiFillMessage></button>
       </form>
    </div>
    </div>
  );
};

export default MessageWebSo;