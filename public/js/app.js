class GameDashboard extends React.Component {

  state = {
    moleLocation: Math.floor(Math.random() * 9).toString(),
    id: uuid.v4(),
  }
  handleMoleChange = () =>{
    console.log(this.props.boxNum)
    this.moveMole()
  }

  moveMole = () =>{
    this.setState({moleLocation: Math.floor(Math.random() * 9).toString()})
  }

  render(){
    const boxStyle = {
      width: '200px',
      height: '200px',
      background: 'green',
      display: 'inline-block',
      margin: '2px'
    }
    return(
      <div className="board">
        <Boxes
          className="boxes"
          boxNum="0"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="1"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="2"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="3"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="4"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="5"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="6"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="7"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />
        <Boxes
          className="boxes"
          boxNum="8"
          moleSpot={this.state.moleLocation}
          onMoleClick={this.handleMoleChange}
          style={boxStyle}
        />

      </div>
    );
  }
}

class Boxes extends React.Component {

  handleMoleClick = (box) =>{
    this.props.onMoleClick(box);
  }

  render(){
    if(this.props.moleSpot == this.props.boxNum){
      return(
        <div className="boxes">
          <span className="moleBox" onClick={this.handleMoleClick}>X</span>
        </div>
      );
    }
    return(
      <div className="boxes"></div>
    );
  }
}

ReactDOM.render(
  <GameDashboard />,
  document.getElementById('content')
)
