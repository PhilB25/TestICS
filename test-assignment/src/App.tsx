// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Compronent/Layout.tsx'
import Listplace from './Compronent/Listplace';
import Detailpc from './Compronent/Detailpc';
import Detailmb from './Compronent/Detailmb';

function App() {
  //const [count, setCount] = useState(0)
  
  return (
      <Layout content={<Listplace/>}/>
  )
}

export default App
