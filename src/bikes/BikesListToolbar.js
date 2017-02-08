import React, { Component } from 'react';

class BikesListToolbar extends Component {
  constructor(props) {
    super(props);

    this.handleSelectedClick = this.handleSelectedClick.bind(this);
    this.handleClassClick = this.handleClassClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleResetClick() {
    const selected = [];
    this.props.onUpdateSortOptions(selected);
  }

  handleSelectedClick(evt) {
    const selected = this.props.selected.filter((item)=>{return item !== evt.target.textContent});
    this.props.onUpdateSortOptions(selected);
  }

  handleClassClick(evt) {
    const selected = this.props.selected.concat(evt.target.textContent);
    this.props.onUpdateSortOptions(selected);
  }

  filteredOptions() {
    return this.props.options.filter((item) => {
      return !this.props.selected.includes(item);
    });
  }

  render() {
    const filteredOptions = this.filteredOptions();
    return (
      <div className="BikesListToolbar">
        <div className="BikesListToolbar-option">
          <label>Sorting by:</label>
          <ul className="BikesListToolbar-class">
            {
              this.props.selected.map(classItem => <li key={classItem} onClick={this.handleSelectedClick}>{classItem}</li>)
            }
          </ul>
        </div>
        <div className="BikesListToolbar-option">
        <label>Sorting options:</label>
          <ul className="BikesListToolbar-class">
            {
              filteredOptions.map(classItem => <li key={classItem} onClick={this.handleClassClick}>{classItem}</li>)
            }
          </ul>
        </div>
        <button className="BikesListToolbar-button" onClick={this.handleResetClick}>RESET</button>
      </div>
    );
  }
}

BikesListToolbar.propTypes = {
  selected: React.PropTypes.array.isRequired,
  options: React.PropTypes.array.isRequired,
  onUpdateSortOptions: React.PropTypes.func.isRequired
}

export default BikesListToolbar;