var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function NavLink(props) {
  return React.createElement(
    'a',
    {
      className: 'nav-link',
      href: props.link.url },
    props.link.label
  );
}

var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
  }

  _createClass(NavBar, [{
    key: 'render',
    value: function render() {
      return this.props.links.map(function (link) {
        return React.createElement(NavLink, {
          key: link.label,
          link: link
        });
      });
    }
  }]);

  return NavBar;
}(React.Component);

// from an array of urls, create link objects


function getLinks(urls, root) {
  var links = [];
  for (var i = 0; i < urls.length; ++i) {
    links.push({
      url: root + urls[i],
      label: urls[i].replace(/\//g, '') // add g modifier to not stop after first match
    });
  }
  return links;
}

// ========================================

var nav = document.getElementById('site-nav');
var urls = nav.getAttribute('urls').split(' ').filter(function (x) {
  return x;
});
var root = nav.getAttribute('root');

ReactDOM.render(React.createElement(NavBar, { links: getLinks(urls, root) }), nav);