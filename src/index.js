import React from 'react'
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'
import App from './App'
import './index.css'
import {Provider} from './context/context'

ReactDOM.render(
  <SpeechProvider appId="bd5ccc49-67c3-4464-9dba-f494738f4743" language="en-US">
    <Provider>
      <App /> 
    </Provider> 
  </SpeechProvider> ,

  document.getElementById('root')
)


