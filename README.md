### Forked and re-purposed from
[gatsbyjs/store.gatsbyjs.org](https://github.com/gatsbyjs/store.gatsbyjs.org)

This is a working repo but the README.md hasn't been updated yet. The changes are mostly cosmetic except for changes in environment variables. The Gatsby store is one of the better designed opensource ecommerce gatsby projects around IMHO. It has its flaws like no search feature but its still a great starting point. I'm working on including a search feature cleanly using algolia preferably that offers everything we've come to expect from search bars.

Cute Pet Supplies Store
---

<p align="center">
  <img alt="Gatsby powered SPA" src="./static/logo-with-white-bg.png" />
</p>

See it live: [https://cutepetsuppliesstore.com/](https://cutepetsuppliesstore.com/)

## Technical Overview

This store is built with data from:

- [Shopify](https://www.shopify.com/)
- The [Shopify JavaScript Buy SDK](https://shopify.github.io/js-buy-sdk/)
- [Auth0](https://auth0.com/)

We’re using [Gatsby V2](https://github.com/gatsbyjs/gatsby) and [Emotion](https://emotion.sh/) to get the data on screen.

The store is statically rendered using the Shopify source plugin, and the maintainer dashboard is a dynamic app (e.g. client-only routes) protected by Auth0.
