import React, { PropTypes } from 'react';
import './App.css';
import HeaderNav from "./components/HeaderNav.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider.jsx";
import Sweets from "./components/Sweets";
import Anime from "./components/Anime";
import Different from "./components/Different";
import Serials from "./components/Serials";
import Dorams from "./components/Dorams";
import Dis from "./components/Dis"
import { Routes, Route, Link } from 'react-router-dom';



function App() {
  return (



    <div className="App">

      <HeaderNav />
      <Slider />


    </div >
  );
}
/*<Routes>
<Route path="*" element={<App />} />
<Route path="/Diffent" element={<Different />} />
<Route path="/Anime" element={<Anime />} />
<Route path="/Serials" element={<Serials />} />
<Route path="/Sweet" element={<Sweet />} />

</Routes>*/

export default App;
