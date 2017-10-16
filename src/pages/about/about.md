---
title: About
---

This is a hybrid static site working as a single page application (SPA)
following the The [PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/)
for improved performance and user experience.

The tool to check if you want a similar app is: [Gatsby](https://www.gatsbyjs.org)
Combining the features of static sites together with tools such as React, Webpack,
GraphQL and others, developers benefit greatly from:

## Components

Everything, even pages in their simplest form are components:

```jsx
const ContactPage = () => (
  <div>
    <h1>Contacts</h1>
    ...
  </div>
);

export default ContactPage;
```

## Plugin architecture

Similarly to [create-react-app](https://github.com/facebookincubator/create-react-app)
one can start off without any configurations. Though, with the more requirements
at hand for the project, various [plugins](https://github.com/gatsbyjs/gatsby/tree/master/packages)
can be added to extend the features of the site in many ways. Most interestingly,
adding different data sources and making them query-able with GraphQL.

## Data via GraphQL

It's possible to add data from various sources which are exposed in a single
GraphQL endpoint during build time. This means that we can have a list of beers
in this simple way:

```graphql
query AllBeersQuery {
  allBeersJson {
    edges {
      node {
        Name_en
        BeerStyle_en
        Description_en
      }
    }
  }
}
```

More information is available in [this tutorial](https://www.gatsbyjs.org/tutorial/part-four/).

The repository of this [site is open source on github](https://github.com/kalinchernev/belgian-beers).
