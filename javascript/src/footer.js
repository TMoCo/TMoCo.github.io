function Social (props) {
  return <li>
    <a className="social-link" href={props.url}>
      <svg className="svg-icon" viewBox="-2 -2 20 20">
        <use xlinkHref={props.icon}>
        </use>
      </svg>
      <span>{props.label}</span>
    </a>
  </li>
}

function SocialLinks (props) {
  return (props.social.map(social =>
    <Social
      key={social.label}
      label={social.label}
      url={social.url}
      icon={props.root + social.icon}/>)
  );
}

// ========================================

const footerSocial = document.getElementById('footer-social');
const social = JSON.parse(footerSocial.getAttribute('social'));
const root = footerSocial.getAttribute('root');

ReactDOM.render(
  <SocialLinks social={social} root={root}/>,
  footerSocial
);
