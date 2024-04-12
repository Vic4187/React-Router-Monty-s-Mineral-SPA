import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Home from './Home';

export function Packages(props) {
    const displayPackages = props.packages.map((eachPackage, index) => 
        <ListGroup.Item key={index}>{eachPackage}</ListGroup.Item>);

    return (
        <Container>
            <Home/>
            <Card>
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <Card.Text>
                        Check out some of our packages! Every package is ethically sourced and organic!
                    </Card.Text>
                </Card.Body>
                <ListGroup>
                    {displayPackages} 
                </ListGroup>
            </Card>
        </Container>
    );
}

export default Packages;





