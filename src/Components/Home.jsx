import { Row, Col, Container } from "react-bootstrap";
import CityWeather from "./CityWeather";

function Home(props) {
  return (
    <div className="container-fluid position-relative jumbotron">
      <video
        src="/assets/videos/background-video.mp4"
        autoPlay
        loop
        muted
      ></video>
      <Row className="d-flex align-items-center h-100">
        <Col xs={12} md={6} className="text-center d-none d-md-block">
          <img src="/assets/images/weather-map-logo.png" alt="logo" />
        </Col>
        <Col xs={12} md={6} className="justify-content-center text-end p-5">
          {props.showCity ? (
            <CityWeather cityName={props.showCity} />
          ) : (
            <Container className="container-home w-100 w-md-50">
              <h1 className="display-5 fw-bold">Weather Map</h1>
              <p className="fs-4 m-0">
                Let us tell you if you need an umbrella
              </p>
            </Container>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Home;

