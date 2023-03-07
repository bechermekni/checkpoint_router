import React from "react";
import ReactStars from "react-stars";
import { Card ,Button} from "react-bootstrap";
import "./MovieCard.css"
import {Link} from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="Carde">
      <Card
        style={{ width: "360px", height: "700px", backgroundColor: "black" }}
      >
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          alt={movie.posterUrl}
          height="360"
        />
        <Card.Body>
          <Card.Title style={{ color: "gray" }}>
            <h1>{movie.title}</h1>
          </Card.Title>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            edit={false}
            half={false}
            value={movie.rating}
          />{" "}
          <br /> <br />
          <Link to={`/movie/${movie.id}`}>
            <Button variant="success">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
