import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
// components
import Tags from '../Tags';
// styled components
import * as S from './styles';
import { Container } from '../UI/Container';
const ArticlePreview = ({ posts }) => {
    if (!posts || !Array.isArray(posts))
        return null;
    return (React.createElement(Container, null,
        React.createElement(S.ArticleList, null, posts.map((post) => (React.createElement("li", { key: post.slug },
            React.createElement(S.StyledLink, { to: `/blog/${post.slug}` },
                React.createElement(GatsbyImage, { alt: '', image: post.heroImage.gatsbyImageData }),
                React.createElement(S.Title, null, post.title)),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: post.description.childMarkdownRemark.html } }),
            React.createElement(S.Meta, null,
                React.createElement("small", null, post.publishDate),
                post.tags.length ? React.createElement(Tags, { tags: post.tags }) : null)))))));
};
export default ArticlePreview;
