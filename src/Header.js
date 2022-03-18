import React from 'react';
import './Header.css'
import HornForm from './HornForm';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gallery of Horns</h1>
        <h2>
          <HornForm
            handleHornFilter={this.props.handleHornFilter}
          />
        </h2>
      </header>
    );
  }
}

export default Header;
