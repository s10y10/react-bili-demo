import './App.css';
import Footer from './components/Footer';
// import Header from './components/Header';
import { createRouters } from './router';

// import HooksDemo from './components/HooksDemo';

export default function App() {
  return (
    <div className='App'>
      {/* <HooksDemo /> */}
      {/* <Header /> */}
      {createRouters()}
      <Footer />
    </div>
  );
}
