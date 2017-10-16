import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IndexBeers = ({ data }) => (
  <div>
    <h1>Belgian Beer Styles</h1>
    <blockquote>
      Beers are classified into beer styles according to the fermentation method
      used. For Belgian beers we notice four types of fermentation: bottom, top,
      spontaneous and mixed. <br />
      --{' '}
      <a href="http://data.visitflanders.org/datatank/dataset/435/download">
        Flanders Open Data Portal
      </a>
    </blockquote>
    {data.allBeersJson.edges.map((node, key) => (
      <Link
        key={key}
        to={`/${node.node.fields.slug}`}
        style={{
          textDecoration: `none`,
          border: `1px dashed`,
          display: `block`,
          padding: `1rem`,
          marginBottom: `1rem`,
        }}
      >
        <div>
          <b>{node.node.Name_en}</b>, {node.node.BeerStyle_en} style
          <p>
            {node.node.Description_en
              .split(' ')
              .slice(0, 30)
              .join(' ') + ' ...'}
          </p>
        </div>
      </Link>
    ))}
  </div>
);

export default IndexBeers;

IndexBeers.propTypes = {
  data: PropTypes.object,
};

/*eslint no-undef: "off"*/
export const query = graphql`
  query AllBeersQuery {
    allBeersJson {
      edges {
        node {
          fields {
            slug
          }
          Name_en
          BeerStyle_en
          Description_en
        }
      }
    }
  }
`;
