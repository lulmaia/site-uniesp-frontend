import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const BannerAd = () => {
  return (
    <Container className="my-4 p-0" fluid>
      <Carousel fade interval={5000} controls={true} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner1.png"
            alt="Vestibular 2025.2"
            style={{
              borderRadius: '8px',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption>
            <h3>Vestibular 2025.2</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/banner2.png"
            alt="Inova Uniesp 2025"
            style={{
              borderRadius: '8px',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
          />
          <Carousel.Caption>
            <h3>Inova Uniesp 2025</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default BannerAd;
