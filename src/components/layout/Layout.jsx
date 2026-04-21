import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/layout/layout.css';

function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;