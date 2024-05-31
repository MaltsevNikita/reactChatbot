import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from './bot/config'
import ActionProvider from './bot/ActionProvider'
import MessageParser from './bot/MessageParser'


function App() {


  return (
    <>
    <div className="App">
      <Chatbot config={config} actionProvider={ActionProvider} messageParser = {MessageParser}/>
    </div>
      
    </>
  )
}

export default App
