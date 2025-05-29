import React, { useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';
import Sidebar from '../components/Sidebar'
import axios from 'axios';

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setConversations(response.data.conversations);
        setMessages(response.data.messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const handleConversationClick = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  const filteredMessages = selectedConversation
    ? messages.filter((message) => message.conversation_id === selectedConversation)
    : [];

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="p-4 w-100 d-flex" style={{ height: "80vh" }}>
        <Card style={{ width: "25%" }} className="me-3 shadow-sm border-0">
          <Card.Body>
            <h5>Messages</h5>
            <Form.Control className="mb-3" placeholder="Search a conversation" />
            <div className="chat-list">
              {conversations.map((conversation) => (
                <div
                  className="mb-2"
                  key={conversation.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleConversationClick(conversation.id)}
                >
                  🧑‍🦰 <b>{conversation.user_name}</b><br /><small>{conversation.last_message}</small>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Card className="flex-fill shadow-sm border-0">
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              {selectedConversation && (
                <>
                  <div className="mb-3"><b>User x</b></div>
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-2 p-2 rounded ${message.sender_id === 1 ? 'bg-primary text-white text-end' : 'bg-light'}`}
                    >
                      {message.message}
                    </div>
                  ))}
                </>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
