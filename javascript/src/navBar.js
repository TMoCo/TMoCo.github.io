function NavBarLink(props) {
  return (
    <div className="nav-link site-nav-button">
        <a href={props.link.url}>
            <span>
              {props.link.label}
            </span>
        </a>
    </div>
  );
}

function NavBarMenu(props) {
  return (
    <div className="site-nav-menu site-nav-button">
      <a href={props.link.url}>
          <span>
            {props.link.label}
          </span>
      </a>
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
    <NavBarMenu key="nav-menu" link={{"url":'/', "label":'menu'}}/>;
}

// hook for getting window dimensions
function useWindowDimension() {
  const [dimension, setDimension] = React.useState([
    window.innerWidth,
    window.innerHeight
  ]);

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
