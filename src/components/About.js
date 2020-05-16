import React from 'react';
import classes from './About.module.css';
import {Container, Col, Image} from 'react-bootstrap';

/**
* @author
* @function About
**/

const About = (props) => {
    return (
        <div>
        <Image src="assets/dog-man.jpg" className={classes.HeaderImg}/>
        <Container>
            <Col xs={12} sm={8} smOffset={2}>
                <Image src="assets/jack.jpg" rounded className={classes.AboutProfileImg}/>
                <h3>Jack</h3>
                <p>This is a crook tree, we will send him to Washington.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, suscipit, laboriosam nisi enim inventore,<br/> omnis eaque voluptatum sapiente adipisci ducimus hic dolores laborum nulla id nobis? Necessitatibus corrupti natus iure.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, suscipit, laboriosam nisi enim inventore,<br/> omnis eaque voluptatum sapiente adipisci ducimus hic dolores laborum nulla id nobis? Necessitatibus corrupti natus iure.</p>
                <p>You better get your coat out. This is a cold painting.</p>
            </Col>
        </Container>
        </div>
    )

}

export default About