import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Atencion from './pages/Atencion';
import GAT from './pages/Gat';
import Formaciones from './pages/Formaciones';
import Tienda from './pages/Tienda';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/atencion" element={<Atencion />} />
        <Route path="/gat" element={<GAT />} />
        <Route path="/formaciones" element={<Formaciones />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </Layout>
  );
}

export default App;