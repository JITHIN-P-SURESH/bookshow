import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket, faPhotoVideo} from '@fortawesome/free-solid-svg-icons';
import Carousal from "../Carousal";
import Cards from "../Cards";

function Stream() {
  return (
    <div>
      
      <Carousal/>
      <div className=' col-12 bg-dark d-flex justify-content-center'><a className='movie'>Live Streaming in Kochi</a></div>
      <div className='moviebox container-fluid bg-dark col-12'>
        <div className='button col-4 p-1'>
          <NavLink to="https://in.bookmyshow.com/explore/movies-kochi"><button className="btn btn-outline-success" type="submit">English</button></NavLink>
          <NavLink to="https://in.bookmyshow.com/explore/movies-kochi"><button className="btn btn-outline-success" type="submit">Malayalam</button></NavLink>
          <NavLink to="https://in.bookmyshow.com/explore/movies-kochi"><button className="btn btn-outline-success" type="submit">Hindi</button></NavLink>
          <NavLink to="https://in.bookmyshow.com/explore/movies-kochi"><button className="btn btn-outline-success" type="submit">Tamil</button></NavLink>
          <NavLink to="https://in.bookmyshow.com/explore/movies-kochi"><button className="btn btn-outline-success" type="submit">Telungu</button></NavLink>
        </div>
      </div>
      <div className='box col-12 bg-dark'>
        <div className='box1 col-lg-4 col-6 p-2'>
        <a>Comming Soon</a>
          <a className='icon1 p-2' href='https://in.bookmyshow.com/explore/upcoming-movies-kochi?referrerBase=movies'>
          <FontAwesomeIcon icon={faPhotoVideo} /></a>
        </div>
        <div className='box2 col-lg-7 col-6 p-3'>
          <a>Explore Upcoming Movies</a>
          <a className='icon1 p-2' href='https://in.bookmyshow.com/explore/upcoming-movies-kochi?referrerBase=movies'>
          <FontAwesomeIcon icon={faArrowRightToBracket} /></a>
        </div>
      </div>
      <Cards/>
    </div>
  )
}

export default Stream
