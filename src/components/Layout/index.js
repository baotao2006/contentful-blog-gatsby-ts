import React from 'react';
import { ThemeProvider } from 'styled-components';
// components
import Footer from '../Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';
// styled components
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';
const Layout = ({ children, location }) => (React.createElement(ThemeProvider, { theme: theme },
    React.createElement(GlobalStyle, null),
    React.createElement(Seo, { title: 'Gatsby Contentful Blog w/ TypeScript' }),
    React.createElement(Navigation, null),
    React.createElement("main", { className: 'test' }, children),
    React.createElement(Footer, null)));
export default Layout;
