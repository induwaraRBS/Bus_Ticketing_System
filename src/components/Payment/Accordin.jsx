import React from 'react'
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Radio } from '@mui/material';
import CardPayment from './CardPayment';

const Accordin = () => {
    const [current, setCurrent] = useState(-1);
	const changeState = (panel) => (e, newValue) => {
		setCurrent(newValue ? panel : -1);
	};
	const [paymentType, setPaymentType] = useState('card');
	const handleType = (e) => {
		setPaymentType(e.target.value);
	};
  return (
    <div style={{color:"red"}}>
			<Accordion expanded={current === 0} onChange={changeState(0)}>
				<AccordionSummary expandIcon={<Radio value='card' checked={paymentType === 'card'} onChange={handleType} sx={{backgroundColor: '#f0f0f0',
                        borderBottom: '1px solid #ddd',}}/>}>
					<Typography sx={{ fontWeight: 'bold' }}>
						<strong>Credit Card</strong> <img src='https://shop.flixbus.co.uk/img/gate/credit_card_jcb.svg'sx={{ width: '30px', height: 'auto', marginLeft: '10px' }}></img>
					</Typography>
				</AccordionSummary>
				<AccordionDetails sx={{ padding: '20px' }}>
					<Typography>
						<CardPayment />
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
  )
}

export default Accordin
