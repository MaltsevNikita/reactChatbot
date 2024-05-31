// in ActionProvider.jsx
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //1) Добавь функцию - обработчик======================
  const handleHello = () => {
    const botMessage = createChatBotMessage('Рад тебя видеть дружище!');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBy = () => {
    const botMessage = createChatBotMessage('Пока друг!');

    setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            //2)Сюда (в объект actions) добавь через запятую функцио-обработчик=============
            handleHello,handleBy
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;