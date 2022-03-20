import React from 'react';
// styled components
import * as S from './styles';
const Hero = ({ content, image, title }) => (React.createElement(S.Hero, null,
    image ? React.createElement(S.Image, { alt: title, image: image }) : null,
    React.createElement(S.Details, null,
        React.createElement(S.Title, null, title),
        content ? React.createElement(S.Content, null, content) : null)));
export default Hero;
