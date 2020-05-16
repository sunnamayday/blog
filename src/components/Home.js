import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Jumbotron } from 'react-bootstrap';
import classes from './Home.module.css'

/**
* @author
* @function Home
**/

const Home = (props) => {
    return (
        <div>
            <Container>
                <Jumbotron className={classes.Jumbotron}>
                    <h2>Welcome to Goodlife</h2>
                    <p>This is how to build a project with React and bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className={classes.Person}>
                        <Image src="assets/jack.jpg" roundedCircle className={classes.Profile} />
                        <h3>Jack</h3>
                        <p>This is a cooked tree. We'll send him to Washington. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae corrupti molestias. Laboriosam iste nesciunt aliquid eveniet similique repellendus, dicta animi consequuntur voluptatem fugit numquam laborum unde tempore ullam vitae.</p>
                    </Col>
                    <Col xs={12} sm={4} className={classes.Person}>
                        <Image src="assets/jack.jpg" roundedCircle className={classes.Profile} />
                        <h3>Jack</h3>
                        <p>This is a cooked tree. We'll send him to Washington. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae corrupti molestias. Laboriosam iste nesciunt aliquid eveniet similique repellendus, dicta animi consequuntur voluptatem fugit numquam laborum unde tempore ullam vitae.</p>
                    </Col>
                    <Col xs={12} sm={4} className={classes.Person}>
                        <Image src="assets/jack.jpg" roundedCircle className={classes.Profile} />
                        <h3>Jack</h3>
                        <p>This is a cooked tree. We'll send him to Washington. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vitae corrupti molestias. Laboriosam iste nesciunt aliquid eveniet similique repellendus, dicta animi consequuntur voluptatem fugit numquam laborum unde tempore ullam vitae.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Home