'use strict';

function MessageHistory({list}) {
  
  const messages = list.map(message => {
    return(
      (message.type === 'response') && <Response key= {message.id} from={message.from} message={message}/> ||
      (message.type === 'message') && <Message key= {message.id} from={message.from} message={message}/> ||
      (message.type = 'typing') && <Typing key= {message.id} from={message.from} message={message}/>
    );
  });
  
  return (
    <ul>{messages}</ul>
  );
}

MessageHistory.defaultProps = {
  list: []
}