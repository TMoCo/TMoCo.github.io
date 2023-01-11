function NavBarLink(props) {
  return (
    <a href={props.link.url}>
      <div className="nav-link site-nav-button">
        <span>
          {props.link.label}
        </span>
      </div>
    </a>
  );
}

function NavBarMenu(props) {
  return (
    <div>
      <label className="site-nav-button">
      menu
      <input className="site-nav-button" type="checkbox"/>
      <div className="site-nav-menu">
      {props.links.map(link =>
        <NavBarLink key={link.label} link={link}/>)
      }
      <br/>
      tap / click anywhere to close the menu
      </div>
      </label>
    </div>
  );
}

function NavBar (props) {
  const [width, height] = useWindowDimension();
  // based on width, change what is rendered
  return width > 1000 ?
    (props.links.map(link =>
      <NavBarLink key={link.label} link={link}/>)
    ):
    <NavBarMenu links={props.links}/>;
}

// hook for getting window dimensions
function useWindowDimension() {
  const [dimension, setDimension] = React.useState([
    window.innerWidth,
    window.innerHeight
  ]);

  console.log("custom hook");

  React.useEffect(() => {
    const debouncedResize = debounce(() => {
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, []) // empty array = only on mount
  return dimension;
}

function debounce(func, timeout=300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
}

// ========================================

const nav = document.getElementById('site-nav');
ReactDOM.render(
  <NavBar links={JSON.parse(nav.getAttribute('nav-links'))}/>,
  nav
);
