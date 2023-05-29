import React from 'react'
import "./featured.scss"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'

export default function Featured({type}) {
  return (
    <div className='featured'>
      {type && (
        <div className="category">

          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" >
            <option >Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
        <img src="https://images.theconversation.com/files/64127/original/2mdvqkw8-1415620078.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop" alt="photo" />

        <div className="info"> 
        <img src="/images/Matrix.png"
         alt="" />

         <span className='desc'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quam. Quis at ratione inventore sequi nulla error quas, expedita iusto debitis porro voluptatibus beatae veritatis sapiente totam repudiandae facilis delectus?
         </span>
         <div className="buttons">
                <button className="play">
                  <PlayArrow/>
                  <span>Play</span>
                </button>
                <button className="more">
                  <InfoOutlined/>
                  <span>Info</span>
                </button>
         </div>

        
        </div>
    </div>

   
  )
}
