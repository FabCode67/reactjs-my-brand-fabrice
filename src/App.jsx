import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Allblogs from './components/allblogs/Allblogs';
import Login from './components/login/Login';

import SingleBlogPage from './components/singleBlogPage/SingleBlogPage';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element=<Allblogs/>/>
        <Route path="/login" element=<Login/> />
        <Route path="/singleBlogPage" element=<SingleBlogPage/> />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
