import React from 'react';
import './Upcoming.css';
import { Container, Table } from 'reactstrap';

class Upcoming extends React.Component {

  state = {
    matches: [],
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/upcoming')
    .then(res => res.json())
    .then((data) => {
      this.setState({ matches: data})
      console.log(this.state.matches);
    })
    .catch(console.log)
  }

  SortData = (matches) => {
    const order = matches.map((match) =>
      <tbody>
        <tr>
          <td>{match.homeTeam}</td>
          <td>{match.awayTeam}</td>
          <td>{match.matchDate}</td>
          <td>{match.league}</td>
        </tr>
      </tbody>
    );

    return (
    <Table>
      <thead>
        <tr>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Match Time</th>
          <th>League</th>
        </tr>
      </thead>
      {order}
    </Table>
    )

  }

  render() {
    return (
      <div>
        <br />
        <Container>
          <hr className="my-2" />
          <br />
          <p>The upcoming matches are:</p>
          {this.SortData(this.state.matches)}
        </Container>
      </div>
    )
  }
}

export default Upcoming;
