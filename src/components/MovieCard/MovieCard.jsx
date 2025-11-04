import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { shortText } from '../../utils/shortText';
import { FaTv } from "react-icons/fa6";

 function MovieCard({ title, poster, description, year, director, rating, genre }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {shortText(description, 30)}
        </Card.Text>    
        <Card.Text>
          <strong>Year:</strong> {year}
        </Card.Text>
        <Card.Text>
          <strong>Director:</strong> {director}
        </Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {rating}
        </Card.Text>
        <Card.Text>
          <strong>Genre:</strong> {genre.join(', ')}
        </Card.Text>

        <Button variant="danger">Watching! 
         <FaTv/>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;


MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  director: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.arrayOf(PropTypes.string),
};
