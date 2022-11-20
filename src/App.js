import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getHeadlines = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/response`)
        console.dir(response.data)
        setData(response.data.results)
      }
      catch (error) {
        console.log(error)
      }
    }
    getHeadlines();
  }, []);




  return (
    <div className="App">
      <Header></Header>
      <HomePage headlines={data}></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
