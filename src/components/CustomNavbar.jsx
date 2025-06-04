import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand="md"
        style={{ backgroundColor: '#002F6C' }}
        variant="dark"
        className="px-3 shadow-sm"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/uniesp.jpg"
              alt="Uniesp Logo"
              width={60}
              height={60}
              className="me-2 rounded"
            ></img>
          </Navbar.Brand>

          {/* Botão Hambúguer - Visível apenas em tela pequenas */}
          <Navbar.Toggle onClick={handleShow} />
          <Navbar.Collapse className="justify-content-end d-nome d-md-flex">
            <Nav>
              <Nav.Link as={Link} to="/a-faculdade" className="px-3">
                A Faculdade
              </Nav.Link>
              <Nav.Link as={Link} to="/dpo-lgpd" className="px-3">
                DPO-LGPD
              </Nav.Link>
              <Nav.Link as={Link} to="/noticias" className="px-3">
                Notícias
              </Nav.Link>
              <Nav.Link as={Link} to="/admin-noticias" className="px-3">
                Admin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Menu lateral (offcanvas) visível em telas pequenas ao clicar no botão "hamburguer" */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {/* Cada item do menu fecha o Offcanvas ao ser clicado */}
            <Nav.Link as={Link} to="/a-faculdade" onClick={handleClose}>
              A Faculdade
            </Nav.Link>
            <Nav.Link as={Link} to="/dpo-lgpd" onClick={handleClose}>
              DPO-LGPD
            </Nav.Link>
            <Nav.Link as={Link} to="/noticias" onClick={handleClose}>
              Notícias
            </Nav.Link>
            <Nav.Link as={Link} to="/admin-noticias" onClick={handleClose}>
              Admin
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
