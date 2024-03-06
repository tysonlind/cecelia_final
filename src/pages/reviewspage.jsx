import {useState} from "react";
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import customerReviews from "../CustomerReviews.json";
import "./reviewspage.css";

function ReviewsPage(props){
  const [reviews, setReviews] = useState(customerReviews);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesomeIcon icon={farStar} key={i} />);
    }
    return stars;
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };


return(
  <>

<div className="reviewsHeroContain">
        <div className="heroImgContain">
          <img src="https://CeceliaBloom.github.io/final_project/reviwspageheroimg.jpg"></img>
        </div>{/*heroImgContain*/}
      </div>{/*reviewsHeroContain*/}
      <div className="reviewsText">
        Reviews
      </div>{/*reviewsText*/}
      <div className="sliderT">
        <Slider {...settings} afterChange={setCurrentIndex}>
          {reviews.map((review, index) => (
            <div className="slideCol" key={review.CustomerID}>
              <div className="content">
                <p>{review.Review}</p>
                <h2>{review.FullName}</h2>
                <div className="starRating">{renderStars(review.Rating)}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  </>
  
)};

export default ReviewsPage;