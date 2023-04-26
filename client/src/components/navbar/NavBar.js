import { Nav } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import React from "react";

export default function NavBar({ active, onSelect, ...props }) {
  return (
    <Nav
      {...props}
      activeKey={active}
      onSelect={onSelect}
      style={{ marginBottom: 50 }}
    >
      <Nav.Item eventKey="home" icon={<HomeIcon />}>
        Home
      </Nav.Item>
      <Nav.Item eventKey="occasion">Occasion Makeup</Nav.Item>
      <Nav.Item eventKey="bridal">Bridal Makeup</Nav.Item>
      <Nav.Item eventKey="3D">3D Lashes</Nav.Item>
      <Nav.Item eventKey="4D">4D Lashes</Nav.Item>
      <Nav.Item eventKey="price">Price List</Nav.Item>
      <Nav.Item eventKey="book">Book Now</Nav.Item>
    </Nav>
  );
}
