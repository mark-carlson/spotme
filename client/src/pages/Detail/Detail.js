import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Exercise2 from "../../components/Images/Exercise2.png"

class Detail extends Component {
  state = {
    exercise: {}
  };
  // When this component mounts, grab the exercise with the _id of this.props.match.params.id

  componentDidMount() {
    API.getExercise(this.props.match.params.id)
      .then(res => this.setState({ exercise: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
              <i class="far fa-star fa-1x"></i>
              <h1>Great Workout!!</h1>
                You did {this.state.exercise.workout} on {this.state.exercise.date} lifted {this.state.exercise.weight} lbs. for {this.state.exercise.repetitions} times.
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1 id="pop">Comments</h1>
              <p>
                {this.state.exercise.comments}
              </p>
              <img src={ Exercise2 } id='shrink' alt=''/>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Workouts</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
