class HomeDashboard extends React.Component {
  render(){
    return(
      <Sidebar />
    )
  }
}

class Sidebar extends React.Component {
  render(){
    return(
      <div className="sidebar col-md-3">
        <ul class="team-list-ul">
          <li className="allTeams">All Teams</li>
            <div className="teamsContent">
              <ul className="eastTeams">
                <li>Bulls</li>
                <li>Celtics</li>
              </ul>
              <ul className="westTeams">
                <li>Clippers</li>
                <li>Lakers</li>
              </ul>
            </div>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <HomeDashboard />,
  document.getElementById('content')
)
