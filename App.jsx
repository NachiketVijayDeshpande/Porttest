import React,{ useRef } from 'react'
import About from "/aboutme.jsx"
import TopButton from "/TopButton.jsx"
import Projects from "/Projects.jsx"
import Firstpage from "/FirstPage.jsx"
import Social from "/Socialmedia.jsx"
import Form from "/Form.jsx"
import Footer from "/Footer.jsx"
import ContactForm from "/Form2.jsx"

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

