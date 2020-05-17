import React, { useEffect } from "react";
import { Button, Row, Col } from "antd";
import AppLayout from "./AppLayout";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Ant Design Prototype for Screen Scanner";
  }, []);

  const colStyle = {
    paddingTop: "12px",
    paddingBottom: "12px",
    paddingLeft: "8px",
    paddingRight: "8px",
  };

  const boxStyle = {
    paddingTop: "8px",
    paddingBottom: "8px",
    backgroundColor: "rgb(0, 146, 255)",
    color: "#e7e7e7",
  };

  return (
    // <div className="App">
    //   <Row>
    //     <Col span={24} style={colStyle}>
    //       <div style={boxStyle}>col</div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={12} style={colStyle}>
    //       <div style={boxStyle}>col-12</div>
    //     </Col>
    //     <Col span={12} style={colStyle}>
    //       <div style={boxStyle}>col-12</div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={8} style={colStyle}>
    //       <div style={boxStyle}>col-8</div>
    //     </Col>
    //     <Col span={8} style={colStyle}>
    //       <div style={boxStyle}>col-8</div>
    //     </Col>
    //     <Col span={8} style={colStyle}>
    //       <div style={boxStyle}>col-8</div>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={6} style={colStyle}>
    //       <div style={boxStyle}>col-6</div>
    //     </Col>
    //     <Col span={6} style={colStyle}>
    //       <div style={boxStyle}>col-6</div>
    //     </Col>
    //     <Col span={6} style={colStyle}>
    //       <div style={boxStyle}>col-6</div>
    //     </Col>
    //     <Col span={6} style={colStyle}>
    //       <div style={boxStyle}>col-6</div>
    //     </Col>
    //   </Row>
    // </div>

    <AppLayout />
  );
}

export default App;
