import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';
import classes from './News.module.css';

/**
* @author
* @function News
**/

const News = (props) => {
    return (
        <div>
            <Image src="assets/mountain-man.jpg" className={classes.HeaderImg} />
            <Container>
            <h2>News</h2>
                <Row>
                    <Col xs={12} sm={8} className={classes.MainSection}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                    
                    </Col>
                    <Col xs={12} sm={4} className={classes.SideSection}>
                        <Image src="assets/dog-man.jpg" rounded />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Totam repellat, soluta amet doloribus necessitatibus accusantium laudantium quam natus, <br/> velit neque facilis, dolorum officia tempore quasi quos fuga voluptatum! Eligendi, quas!</p>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default News