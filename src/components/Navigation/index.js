import React from 'react';
import { Link } from 'gatsby';
// styled components
import * as S from './styles';
const Navigation = () => (React.createElement(S.Nav, { role: 'navigation', "aria-label": 'Main' },
    React.createElement(S.LogoLink, { to: '/' },
        React.createElement(S.Logo, null),
        React.createElement("span", null, "Gatsby Starter Contentful")),
    React.createElement(S.MenuList, null,
        React.createElement(S.MenuItem, null,
            React.createElement(Link, { to: '/', activeClassName: 'active' }, "Home")),
        React.createElement(S.MenuItem, null,
            React.createElement(Link, { to: '/blog/', activeClassName: 'active' }, "Blog")))));
export default Navigation;
