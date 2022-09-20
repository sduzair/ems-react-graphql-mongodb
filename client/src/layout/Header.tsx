import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

interface Props { }

export default function Header({ }: Props) {
  return (
    <>
      <Navbar bg="white" variant="light">
        <Container fluid>
          <LinkContainer to="/"><Navbar.Brand>Employee Management System</Navbar.Brand></LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/create"><Nav.Link>New</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}