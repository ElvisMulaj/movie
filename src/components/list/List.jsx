import React, { useRef, useState } from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../listItem/ListItem'

export default function List() {

  const [isMoved,setIsMoved]= useState(false);
  const [sliderNumber,setSlideNumber]= useState(0);
 

 const listRef= useRef()

//funksioni i sliderit 
  const handleClick = (direction) =>{
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x -50
    if(direction ==="left" &&sliderNumber >0 ){
      setSlideNumber(sliderNumber-1)
      listRef.current.style.transform =`translateX(${230 + distance}px)`
    }
    if(direction ==="right" && sliderNumber <2){
      setSlideNumber(sliderNumber +1)
      listRef.current.style.transform =`translateX(${-230 + distance}px)`
    }
  }
 
  
  return (
    <div className="list">
       <span className="listTitle"> Continue to watch</span>
       <div className="wrapper">
        <ArrowBackIosOutlined 
        className="sliderArrow left"
         onClick ={() => handleClick("left")}
         style={{display: !isMoved && "none"}}
         />
        <div className="container" ref={listRef}>
            <ListItem index={0}/>
            <ListItem index={1}/>
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
            
        </div>
        <ArrowForwardIosOutlined className="sliderArrow right" onClick ={() => handleClick("right")}/>

       </div>
        </div>
  )
}
