var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function NavBarLink(props) {
  return React.createElement(
    "div",
    { className: "nav-link site-nav-button" },
    React.createElement(
      "a",
      { href: props.link.url },
      React.createElement(
        "span",
        null,
        props.link.label
      )
    )
  );
}

function NavBarMenu(props) {
  return React.createElement(
    "div",
    { className: "site-nav-menu site-nav-button" },
    React.createElement(
      "a",
      { href: props.link.url },
      React.createElement(
        "span",
        null,
        props.link.label
      )
    )
  );
}

function NavBar(props) {
  var _useWindowDimension = useWindowDimension(),
      _useWindowDimension2 = _slicedToArray(_useWindowDimension, 2),
      width = _useWindowDimension2[0],
      height = _useWindowDimension2[1];

  console.log(width, height);
  // based on width, change what is rendered
  return width > 1000 ? props.links.map(function (link) {
    return React.createElement(NavBarLink, { key: link.label, link: link });
  }) : React.createElement(NavBarMenu, { key: "nav-menu", link: { "url": '/', "label": 'menu' } });
}

// hook for getting window dimensions
function useWindowDimension() {
  var _React$useState = React.useState([window.innerWidth, window.innerHeight]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      dimension = _React$useState2[0],
      setDimension = _React$useState2[1];

  React.useEffect(function () {
    var debouncedResize = debounce(function () {
      console.log("resized");
      setDimension([window.innerWidth, window.innerHeight]);
    }, 100);
    window.addEventListener('resize', debouncedResize);
    return function () {
      return window.removeEventListener('resize', debouncedResize);
    };
  }, []); // empty array = only on mount
  return dimension;
}

function debounce(func) {
  var _this = this;

  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  var timer = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      return func.apply(_this, args);
    }, timeout);
  };
}

// ========================================

var nav = document.getElementById('site-nav');
ReactDOM.render(React.createElement(NavBar, { links: JSON.parse(nav.getAttribute('nav-links')) }), nav);