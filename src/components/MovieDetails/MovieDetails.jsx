import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./MovieDetails.css"

const MovieDetails = ({movies}) => {
  const navigate=useNavigate()
let {id} = useParams()

const [details,setDetails]=useState({})
useEffect(() => {
  setDetails(movies.filter((movie)=>movie.id===id)[0])

  
}, [id])
const home=()=>{
  navigate("/")
}
  return (
    <div className="detail">
      <h1>{details.title}</h1>
      <iframe
        width="795"
        height="530"
        src={details.trailer}
        title={details.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <br />
      <br />
      {details.description}
      <Button variant="success" onClick={home}>Go home</Button>
    </div>
  );
}

export default MovieDetails




 