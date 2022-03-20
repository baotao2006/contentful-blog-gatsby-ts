import React from 'react';
import { Link, graphql } from 'gatsby';
// components
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Tags from '../components/Tags';
// styled components
import * as S from './styles';
import { Container } from '../components/UI/Container';
const BlogPostTemplate = ({ data, location }) => {
    const post = data.contentfulBlogPost;
    const { previous } = data;
    const { next } = data;
    return (React.createElement(Layout, { location: location },
        React.createElement(Seo, { title: post.title, description: post.description.childMarkdownRemark.excerpt }),
        React.createElement(Hero, { image: post.heroImage?.gatsbyImageData, title: post.title, content: post.description?.childMarkdownRemark?.excerpt }),
        React.createElement(Container, null,
            React.createElement(S.Meta, null,
                post.author?.name,
                " \u00B7 ",
                React.createElement("time", { dateTime: post.rawDate }, post.publishDate),
                " \u2013",
                ' ',
                post.body?.childMarkdownRemark?.timeToRead,
                " minute read"),
            React.createElement(S.Article, null,
                React.createElement(S.Body, { dangerouslySetInnerHTML: { __html: post.body?.childMarkdownRemark?.html } }),
                post.tags.length ? React.createElement(Tags, { tags: post.tags }) : null,
                (previous || next) && (React.createElement(S.Navigation, null,
                    React.createElement("ul", null,
                        previous && (React.createElement("li", null,
                            React.createElement(Link, { to: `/blog/${previous.slug}`, rel: 'prev' },
                                "\u2190 ",
                                previous.title))),
                        next && (React.createElement("li", null,
                            React.createElement(Link, { to: `/blog/${next.slug}`, rel: 'next' },
                                next.title,
                                " \u2192"))))))))));
};
export default BlogPostTemplate;
export const pageQuery = graphql `
    query BlogPostBySlug($slug: String!, $previousPostSlug: String, $nextPostSlug: String) {
        contentfulBlogPost(slug: { eq: $slug }) {
            slug
            title
            author {
                name
            }
            publishDate(formatString: "MMMM Do, YYYY")
            rawDate: publishDate
            heroImage {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
                resize(height: 630, width: 1200) {
                    src
                }
            }
            body {
                childMarkdownRemark {
                    html
                    timeToRead
                }
            }
            tags
            description {
                childMarkdownRemark {
                    excerpt
                }
            }
        }
        previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
            slug
            title
        }
        next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
            slug
            title
        }
    }
`;
