import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  autoplay: true
};

const Carousel = ({ data }) => {
  return (
    <Slider {...settings} className="overflow-hidden">
      <div>
        <Image fluid={data.carouselImage1} />
      </div>
    </Slider>
  );
};

// export const query = graphql`
//   query {
//     image1: file(relativePath: { eq: "img-bc7a4ecb311a88df275d615ec2c061a2.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default Carousel;
