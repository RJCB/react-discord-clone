import './App.css';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Hero />
        </>} />
    </Routes>
  );
}

export default App;
