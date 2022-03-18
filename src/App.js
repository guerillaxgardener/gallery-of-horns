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
      showModal: false,
      hornsShown: 0,
      allBeasts: data
    }
  }


  handleSelectedBeast = (beast) => {
    this.setState({
      showModal: true,
      beast,
    })
  }

  handleHornFilter = (hornsShown) => {
    console.log(typeof hornsShown);
    let hornFiltrationArray = data.filter(beast => (beast.horns === hornsShown));
    console.log(hornFiltrationArray);

    this.setState({
      allBeasts: hornFiltrationArray
    })
    if (hornsShown === 0){
      this.setState({
        allBeasts: data
      })
    }
  }

  closeModal = () => this.setState({ showModal: false });

  render() {
    // console.log('app state', this.state);
    return (
      <>
        <SelectedBeast
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          beast={this.state.beast}
        />
        <Header
          handleHornFilter={this.handleHornFilter}
        />
        <Main
          data={this.state.allBeasts}
          handleSelectedBeast={this.handleSelectedBeast}
          hornsShown={this.state.hornsShown}
        />
        <Footer />
      </>
    );
  }
};

export default App;