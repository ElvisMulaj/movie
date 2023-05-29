import React from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../listItem/ListItem'

export default function List() {
  return (
    <div className="list">
       <span className="listTitle"> Continue to watch</span>
       <div className="wraper">
        <ArrowBackIosOutlined/>
        <div className="container">
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
        <ArrowForwardIosOutlined/>

       </div>
        </div>
  )
}
