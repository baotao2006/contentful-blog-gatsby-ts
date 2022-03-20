import React from 'react';
// styled components
import * as S from './styles';
const Tags = ({ tags }) => (React.createElement(S.Tags, null, tags.map((tag) => (React.createElement(S.Tag, { key: tag }, tag)))));
export default Tags;
