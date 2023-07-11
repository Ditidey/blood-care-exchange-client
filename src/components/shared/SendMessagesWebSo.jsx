import React, { useEffect } from 'react';

const SendMessagesWebSo = () => {
    useEffect(() => {
        // ...
    
        // Send a message
        socket.send('Hello server!');
    
        // ...
    
        return () => {
          // ...
        };
      }, []);
    return (
        <div>
            
        </div>
    );
};

export default SendMessagesWebSo;