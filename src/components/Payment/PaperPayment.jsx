import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ControlledAccordions from '../Payment/Accordin'

const PaperPayment = () => {
  return (
    <Box
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				'& > :not(style)': {
					m: 1,
					width: 128,
					height: 128,
				},
			}}>
			<Paper style={{ width: '100%', padding: '2%', height: 'auto' }} variant='outlined' elevation={3}>
				<h4>Payment</h4>
				<ControlledAccordions />
			</Paper>
		</Box>
  )
}

export default PaperPayment
