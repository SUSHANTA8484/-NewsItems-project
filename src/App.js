import React from 'react';
import Navbar from './Navbar';
import News from './News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = ()=> {
  const pagesize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
    return (
      <div>
     <Router>
      <Navbar/>
       <Routes>
        <Route exact path="/" element={<News apiKey={apiKey} key="general" pagesize={pagesize} country="in" category="general" />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" pagesize={pagesize} country="in" category="sports" />} /> 
          <Route exact path="/business" element={<News apiKey={apiKey} key="business" pagesize={pagesize} country="in" category="business" />}/>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} key="entertainment" pagesize={pagesize} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News apiKey={apiKey} key="health" pagesize={pagesize} country="in" category="health" />}/>
          <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" pagesize={pagesize} country="in" category="technology" />} /> 
          <Route exact path="/science" element={<News apiKey={apiKey} key="science"  pagesize={pagesize} country="in" category="science" />} />
        </Routes>
        </Router>
    
      </div>
    );
  }
export default App;
