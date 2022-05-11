import React from 'react';
import styled from '@emotion/styled';

import { breakpoints, colors, fonts, spacing } from '../../utils/styles';
import Carousel from '../Carousel';
import image1 from '../Carousel/img.png';

const ProductListingHeaderRoot = styled(`header`)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 40em;
  padding: ${spacing.lg}px;
  text-align: center;
`;

const Title = styled(`h1`)`
  color: ${colors.brandDark};
  font-family: ${fonts.heading};
  font-size: 2.4rem;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  margin-top: ${spacing.md}px;

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 3rem;
  }
`;

const Intro = styled(`p`)`
  color: ${colors.text};
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
  margin-top: ${spacing.md}px;

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const imagesCarousel = {
  carouselImage1: image1
};

const ProductListingHeader = () => (
  <ProductListingHeaderRoot>
    <Carousel data={imagesCarousel} />
    <Title>Pamper Your Furry Friends!</Title>
    <Intro>
      We pride ourselves in curating an extensive range of unique premium
      quality products at very competitive prices. With something for every
      season in a variety of styles, sizes and colors, show your pet some love
      today or better yet, gift your loved ones with simple yet thoughtful
      trinkets for their furry friends no matter where they are and take
      advantage of our worldwide shipping on all orders… stress-free.
      <br />
      <br />
      With Pet Supplies Store, every day is full of discovery, wonder and
      amazement with fun products just a click away. Pet shopping has never been
      this great!
    </Intro>
  </ProductListingHeaderRoot>
);

export default ProductListingHeader;
