import React from 'react';

const BeerPage = ({ data }) => {
  const beer = data.beersJson;
  return (
    <div>
      <h1>{beer.Name_en}</h1>
      <p>
        <strong>{beer.BeerStyle_en}</strong>
      </p>
      <p>{beer.Description_en}</p>
    </div>
  );
};

export const query = graphql`
  query BeerPage($slug: String!) {
    beersJson(fields: { slug: { eq: $slug } }) {
      Name_en
      BeerStyle_en
      Description_en
    }
  }
`;

export default BeerPage;
