//App.js 
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './componenets/Header'; 
import About from './componenets/About'; 
import Projects from './componenets/Projects'; 
import Resume from './componenets/Resume'; 
import Contact from './componenets/Contact'; 
import Footer from './componenets/Footer'; 
import Skills from './componenets/Skills'; 
import './App.css'

function App() { 
return ( 
	<Router> 
	<div> 
		<Header /> 
		<Routes> 
		<Route path="/" element={<About />} /> 
		<Route path="/projects" element={<Projects />} /> 
		<Route path="/skills" element={<Skills />} /> 
		<Route path="/resume" element={<Resume />} /> 
		<Route path="/contact" element={<Contact />} /> 
		</Routes> 
		<Footer /> 
	</div> 
	</Router> 
); 
} 

export default App;
