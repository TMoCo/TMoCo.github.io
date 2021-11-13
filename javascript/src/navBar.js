function NavLink(props) {
  return <a
    className="nav-link"
    href={props.link.url}>
    {props.link.label}
    </a>;
}

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (this.props.links.map(link =>
        <NavLink
          key={link.label}
          link={link}
        />
      )
    );
  }
}

// from an array of urls, create link objects
function getLinks(urls, root) {
  let links = [];
  for (let i=0; i<urls.length; ++i) {
    links.push({
      url: root + urls[i],
      label: urls[i].replace(/\//g, ''), // add g modifier to not stop after first match
    })
  }
  return links;
}

// ========================================

const nav = document.getElementById('site-nav');
const urls = nav.getAttribute('urls').split(' ').filter(x => x);
const root = nav.getAttribute('root')

ReactDOM.render(
  <NavBar links={getLinks(urls, root)}/>,
  nav
);
