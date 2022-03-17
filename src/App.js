import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data.json';
import SelectedBeast from './SelectedBeast'
import './App.css'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beast: {},
      showModal: false
    }
  }


  handleSelectedBeast = (beast) => {
    this.setState({
      showModal: true,
      beast,
    })
  }

  closeModal = () => this.setState({ showModal: false });

  render() {
    console.log('app state', this.state);
    return (
      <>
        <SelectedBeast
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          beast={this.state.beast}
        />
        <Header />
        <Main
          data={data}
          handleSelectedBeast={this.handleSelectedBeast}
        />
        <Footer />
      </>
    );
  }
};

export default App;