import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const SeedSummary = ({ seed }) => {
    return (
        <Card>
            <Row className="align-items-center">
                <Col xs={8}>
                    <Link to={'/seed/' + seed.id} className="btn">
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                {seed.title}
                            </blockquote>
                        </Card.Body>
                    </Link>
                </Col>
                <Col xs={1}>
                    1
                </Col>
                <Col xs={3}>
                    <Button variant="secondary">vote</Button>
                </Col>
            </Row>
        </Card>
    )
}
export default SeedSummary;