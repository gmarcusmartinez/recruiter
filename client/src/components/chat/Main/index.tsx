import React from 'react';
import { MessageBubble } from 'components/chat/MessageBubble';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Spinner } from 'components/common/Spinner';
import { IMessage } from 'interfaces';

export const ChatMain = () => {
  const chatRef = React.useRef<any>(null);
  const { messageItems, loading } = useTypedSelector((state) => state.chats);

  const list = messageItems.map((msg: IMessage) => (
    <MessageBubble msg={msg} key={msg._id} />
  ));
  const renderList = () => (loading ? <Spinner /> : <>{list}</>);

  React.useEffect(() => {
    setTimeout(() => {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }, 100);
  }, []);

  return (
    <div className='chat__main' ref={chatRef}>
      {renderList()}
    </div>
  );
};
