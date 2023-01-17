import { createContext, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

export const categoryContext = createContext();

function App() {

  const [bookingInfo, setBookingInfo] = useState({})

  return (
    <categoryContext.Provider value={{bookingInfo, setBookingInfo}}>
      <Layout />
    </categoryContext.Provider>
  );
}

export default App;
