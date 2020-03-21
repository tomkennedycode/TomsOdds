import React from 'react';
import './AccumulatorBuilder.css';
import { Container, DropdownItem, DropdownMenu, Dropdown, DropdownToggle, FormGroup, Label, Input } from 'reactstrap';

class AccumulatorBuilder extends React.Component {

  state = {
    matches: [],
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/upcoming')
    .then(res => res.json())
    .then((data) => {
      this.setState({ matches: data})
    })
    .catch(console.log)
  }

  SortData = (matches) => {

    const dropdownHomeTeam = matches.map((match) =>
        <option>
          {match.homeTeam}
        </option>
    )

    const dropdownAwayTeam = matches.map((match) =>
      <option>
        {match.awayTeam}
      </option>
    )

    return (
      <div>
        <FormGroup>
          <Label>home team</Label>
          <Input type="select" name="homeTeams" id="homeTeamSelect">
            {dropdownHomeTeam}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>away team</Label>
          <Input type="select" name="awayTeams" id="awayTeamSelect">
            {dropdownAwayTeam}
          </Input>
        </FormGroup>
      </div>
    )

  }

  render() {
    return (
      <div>
        <br />
        <Container>
          <hr className="my-2" />
          <br />
          <p>please create an accumulator and we will give you the best odds:</p>
          {this.SortData(this.state.matches)}
        </Container>
      </div>
    )
  }
}

export default AccumulatorBuilder;
