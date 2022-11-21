import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
import ArticlePage from './components/ArticlePage';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getHeadlines = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_NEWSDATAURL)
        console.dir(response)
        setData(response.data.response.results)
      }
      catch (error) {
        console.log(error)
      }
    }
    getHeadlines();
  }, []);




  return (
    <Router>
      <div className="App">

        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage headlines={data}></HomePage>}></Route>
          <Route path='/article/:id' element={<ArticlePage headlines={data}></ArticlePage>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
