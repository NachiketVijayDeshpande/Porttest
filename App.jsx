import React,{ useRef } from 'react'
import About from "/aboutme.jsx"
import TopButton from "/TopButton.jsx"
import Projects from "/Projects.jsx"
import Firstpage from "/FirstPage.jsx"
import Social from "/Socialmedia.jsx"
import Form from "/Form.jsx"
import Footer from "/Footer.jsx"


export default function App() {
    const[showdetail,setShowdetail] =React.useState(false)
    
    function toggleDetail(){
        setShowdetail(prev=>!prev)
    }
    
    function setToggleOf(){
        setShowdetail(prev=>false)
    }
    
   
  return (
    <div className="main" style={{ minHeight: "200vh" }}>
        <img src="https://github.com/NachiketVijayDeshpande/Porttest/blob/e09018ab4eafa9596e9655cf842fca8e96ca3b1e/images/nlogo.png"></img>
        <TopButton toggleDetail={toggleDetail}  setToggleOf={setToggleOf} />
       <Firstpage/>
       <Social/>
    { showdetail &&<About toggle={toggleDetail}/>}
    <Projects/>
    <Form  />
    <Footer/>
    </div>
  )
}

