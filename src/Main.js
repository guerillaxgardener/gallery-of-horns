import React from 'react';
import HornedBeast from './HornedBeast';
import './Main.css';

class Main extends React.Component {
  render() {
    // console.log(this.props.data);
    let hornedBeastArray = [];
    this.props.data.forEach((hornedBeast,index) => {
      hornedBeastArray.push(
        <HornedBeast
          title={hornedBeast.title}
          image_url={hornedBeast.image_url}
          key = {index}
          description = {hornedBeast.description}
        />
      )
    })

// console.log(hornedBeastArray);
    return (
      <main>
        {hornedBeastArray}
      </main>
    )
  }
}

export default Main;
