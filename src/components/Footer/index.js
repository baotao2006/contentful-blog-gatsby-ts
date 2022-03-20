import React from 'react';
// components
import { Container } from '../UI/Container';
// styled components
import * as S from './styles';
const Footer = () => (React.createElement(Container, null,
    React.createElement(S.Footer, null,
        "Built with ",
        React.createElement("a", { href: 'https://contentful.com/' }, "Contentful"),
        " and",
        ' ',
        React.createElement("a", { href: 'https://gatsbyjs.com' }, "Gatsby"),
        " \u00B7",
        ' ',
        React.createElement("a", { href: 'https://github.com/contentful/starter-gatsby-blog' }, "Source"))));
export default Footer;
