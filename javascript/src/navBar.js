class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: props,
    }
  }

  render() {
    return (
      <div className="nav-bar"> </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <NavBar />,
  document.getElementById('site-nav')
);
