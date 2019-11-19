import React, { useState, useLayoutEffect } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Slider from "react-slick";

interface Props {}

export const Levelcarousel: React.FC<Props> = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const items = [
    {
      id: 1,
      level: 1,
      score: "25,302",
      class: "crsl-card"
    },
    {
      id: 2,
      level: 2,
      score: "31,254",
      class: "crsl-card"
    },
    {
      id: 3,
      level: 3,
      score: "46,302",
      class: "crsl-card-active"
    },
    {
      id: 4,
      level: 4,
      score: "45,451",
      class: "crsl-card-locked"
    },
    {
      id: 5,
      level: 5,
      score: "56,231",
      class: "crsl-card-locked"
    },
    {
      id: 6,
      level: 6,
      score: "42,231",
      class: "crsl-card-locked"
    },
    {
      id: 7,
      level: 7,
      score: "42,231",
      class: "crsl-card-locked"
    },
    {
      id: 8,
      level: 8,
      score: "42,231",
      class: "crsl-card-locked"
    },
    {
      id: 9,
      level: 9,
      score: "42,231",
      class: "crsl-card-locked"
    }
  ];

  const slides = items.map(item => {
    return (
      <div key={item.id}>
        <Row className="crsl">
          <Col className="crsl-display">
            <Card className={item.class}>
              <CardHeader className="card-header">
                <Row>
                  <Col xs="3" sm="3" className="card-header-title">
                    LEVEL
                  </Col>
                  <Col xs="4" sm="4" className="card-header-title">
                    DISTANCE
                  </Col>
                  <Col xs="5" sm="5" className="card-header-title text-right">
                    HIGH SCORE
                  </Col>
                </Row>
                <Row>
                  <Col xs="3" sm="3" className="card-header-level mt-0">
                    {item.level}
                  </Col>
                  <Col xs="5" sm="5" className="d-flex">
                    <Form>
                      <FormGroup className="mt-3">
                        <Input className="card-header-dist" type="select">
                          <option>Short</option>
                          <option>Medium</option>
                          <option>Long</option>
                        </Input>
                      </FormGroup>
                    </Form>
                  </Col>
                  <Col xs="4" sm="4">
                    <div className="card-header-score mt-3">{item.score}</div>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody className="card-body d-flex">
                <Button className="btn-sqr-chart">
                  <div className="fas fa-chart-line chart-icon" />
                </Button>
                <Button className="btn-sqr-play"></Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  });

  let slider: Slider | null;
  const nextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const previousSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  return (
    <div>
      <div className="titlebar-title mb-3 d-flex">
        <h1 className="title">Micro</h1>
        <div className="ml-auto mr-2">
          <div
            className="titlebar-title-arrow fas fa-arrow-left"
            onClick={previousSlide}
          ></div>
          <div
            className="titlebar-title-arrow fas fa-arrow-right"
            onClick={nextSlide}
          ></div>
        </div>
      </div>

      <div>
        <Slider {...settings} ref={reference => (slider = reference)}>
          {slides}
        </Slider>
      </div>
    </div>
  );
};
