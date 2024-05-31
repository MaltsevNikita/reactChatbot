import { createChatBotMessage } from 'react-chatbot-kit';
const botName = "Tommy";

const config = {
  initialMessages: [createChatBotMessage(`Привет.Я ${botName} - твой персональный ассистент. Чем могу помочь?`)],
  botName: 'Tommy',
};

export default config;