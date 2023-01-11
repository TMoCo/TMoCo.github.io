function Social(props) {
  return React.createElement(
    "li",
    null,
    React.createElement(
      "a",
      { className: "social-link", href: props.url },
      React.createElement(
        "svg",
        { className: "svg-icon", viewBox: "-2 -2 20 20" },
        React.createElement("use", { xlinkHref: props.icon })
      ),
      React.createElement(
        "span",
        null,
        props.label
      )
    )
  );
}

function SocialLinks(props) {
  return props.social.map(function (social) {
    return React.createElement(Social, {
      key: social.label,
      label: social.label,
      url: social.url,
      icon: props.root + social.icon });
  });
}

// ========================================

var footerSocial = document.getElementById('footer-social');
var social = JSON.parse(footerSocial.getAttribute('social'));
var root = footerSocial.getAttribute('root');

ReactDOM.render(React.createElement(SocialLinks, { social: social, root: root }), footerSocial);