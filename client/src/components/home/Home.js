import React from 'react';
import './Home.css';
import { Container, Jumbotron, Button } from 'reactstrap';

function Home() {

  return (
    <div>
      <br />
      <Container>
        <hr className="my-2" />
        <br />
        <Jumbotron>
          <h1 className="display-3">Welcome to tomsodds!</h1>
          <p className="lead">We currently only display premier league odds but plan to extend across europes top 5 leagues.</p>
          <hr className="my-2" />
          <p>Please provide feedback by clicking the button below.</p>
          <p className="lead">
            <Button color="primary" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;to=tom.kennedy017@gmail.com&amp;su=TomsOdds%20Feedback&amp;tf=1">Contact Tom</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
