import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SeatPicker from './SeatPicker';
import Reservation from './PaperSeatReservation';
import SeatBook from '../../pages/SeatBook Page/SeatBook';
import { useState } from 'react';
const SeatBar = ({open,setOpen}) => {
  return (
    <Drawer
    open={open}
    anchor='right'
    onClose={() => setOpen(false)}
    sx={{
        width: '350px',
        margin: '20px',
        '& .MuiDrawer-paperAnchorRight': {
            padding: '20px 50px',
        },
    }}>
    <Row style={{ textAlign: 'center' }}>
        <h2>Seat Reservation</h2>
    </Row>
    <Row style={{ textAlign: 'center' }}>
        <p>Colombo-Badulla</p>
    </Row>
    <Row>
        <SeatPicker />
    </Row>
    <Row style={{ margin: '3% 0' }}>
        <Col>Reserved 1/1</Col>
        <Col>
            <Button variant='contained' href='#contained-buttons' sx={{ height: '100%', fontSize: '100%', backgroundColor: '#c40a0abf', width: '100%', borderRadius: 3 }} onClick={() => setOpen(false)}>
                Continue
            </Button>
        </Col>
    </Row>
</Drawer>
  )
}

export default SeatBar
