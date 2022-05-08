import './App.css';
import Header from './components/Header';
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from './components/Hero';
import Home from './components/Home';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Hero />
        </>} />
      <Route exact path="/channels" element={user ? <Home /> : <Navigate to="/" />}>
        <Route path=":id" element={<Home />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> add landing page component and move header , hero in and add landing page here*/}
    </Routes>
  );
}

export default App;
