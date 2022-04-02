import React , {useState} from 'react';
import {Header , Footer , Main } from './Components'

import data from './data.json';

function App() {
  const [products , setProducts] = useState(data);
  return (
    <div className="App">
      <Header/>
      <Main products = {products} />
      <Footer/>
    </div>
  );
}

export default App;
