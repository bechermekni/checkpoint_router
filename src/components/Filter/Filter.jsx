import React ,{useState} from "react";
import { Navbar, Container, Button,Modal } from "react-bootstrap";
import ReactStars from "react-stars";
import { v4 as uuidv4 } from "uuid";

const Filter = ({ setMovies, movies, setTitleSearch, setRatingSearch }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    description: "",
    rating: 1,
    posterUrl: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    setMovies([...movies, newMovie]);
    handleClose();
  };

  const handleTitleSearch = (e) => {
    setTitleSearch(e.target.value);
  };

  const handleRatingSearch = (new_rating) => {
    setRatingSearch(new_rating);
   
  };
 
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://play-lh.googleusercontent.com/x6e04XkLxys_hZ0ENmupQXMJ6oIoPAp3lU-3H-V2TT7FIDMX56w4Bk0wefurWU2eduQ=s500-rw"
              width="80"
              height="70"
              className="d-inline-block align-top"
            />{" "}
            Movie Night
          </Navbar.Brand>
          <input
            type="text"
            placeholder="Search by Title"
            onChange={handleTitleSearch}
          />
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            half={false}
            onChange={handleRatingSearch}
          />
          ,
          <Button variant="warning" onClick={handleShow}>
            add movie
          </Button>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} className="madale">
        <Modal.Header closeButton style={{ backgroundColor: "gray" }}>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="posterUrl">posterUrl: </label>
          <br />
          <input
            type="text"
            placeholder="poster"
            name="posterUrl"
            onChange={handleChange}
          ></input>
          <br></br>
          <label htmlFor="rating">Rating:</label>
          <br />
          <input
            type="number"
            placeholder="Rating"
            name="rating"
            onChange={handleChange}
          ></input>
          <br></br>
          <label htmlFor="description">description:</label>
          <br />
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={handleChange}
          ></input>
          <br></br>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Filter;
