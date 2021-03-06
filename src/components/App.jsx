import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import StopsFilter from './StopsFilter';
import SortingMenu from './SortingMenu';
import PageHeader from './PageHeader';
import TicketsList from './TicketsList';
import NotifyBar from './NotifyBar';
import LoadingBar from './LoadingBar';

const App = () => (
  <Container>
    <LoadingBar />
    <NotifyBar />
    <Row>
      <Col>
        <PageHeader />
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={4}>
        <StopsFilter />
      </Col>
      <Col sm={12} md={8}>
        <SortingMenu />
        <TicketsList />
      </Col>
    </Row>
  </Container>
);

export default App;
