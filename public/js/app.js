class HomeDashboard extends React.Component {
  state = {
    filters: "",
    articles: [],
  };

  handleTeamClick = () =>{
    console.log('click');
    this.loadArticlesFromServer();


  }
  loadArticlesFromServer = () => {
    client.getArticles((serverArticles) => (
      this.setState({
        filters: "lakers",
        articles: serverArticles,
      })
    ))
  }
  render(){
    return(
      <div>
        <Sidebar
          onTeamClick={this.handleTeamClick}
        />
        <NewsFeed
          filters={this.state.filters}
          articles={this.state.articles}
        />
      </div>
    )
  }
}

class Sidebar extends React.Component {

  render(){
    return(
      <div className="sidebar col-md-3">
        <ul className="team-list-ul">
          <li className="allTeams">All Teams</li>
            <div className="teamsContent">
              <ul className="eastTeams">
                <li>Bulls</li>
                <li>Celtics</li>
              </ul>
              <ul className="westTeams">
                <li>Clippers</li>
                <Team
                  onTeamClick={this.props.onTeamClick}
                />

              </ul>
            </div>
        </ul>
      </div>
    )
  }
}

class Team extends React.Component {
  render(){
    return(
      <button
        onClick={this.props.onTeamClick}
      >
      lakers
      </button>
    )
  }
}

class NewsFeed extends React.Component {




  componentDidMount(){

    setInterval(this.loadArticlesFromServer, 5000)
  }

  loadArticlesFromServer = () => {
    client.getArticles((serverArticles) => (
      this.setState({articles: serverArticles})
      )
    );
  }

  render(){
    return(
      <div className='newsFeedContainer'>
        <ArticlesList
          articles={this.props.articles}
        />
      </div>
    );
  }
}

class ArticlesList extends React.Component {
  render() {
    const articles = this.props.articles.map((article) =>(
      <Article
        content={article.content}
      />
    ));
    return (
      <div id='articles'>
        {articles}
      </div>
    )
  }
}

class Article extends React.Component {
  render(){
    return(
      <div className="article">
        <p>
          {this.props.content}
        </p>
      </div>
    )
  }
}

ReactDOM.render(
  <HomeDashboard />,
  document.getElementById('content')
)
