import { Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./Footer.css"
const Footer = () => {
  return (
    <div className='footer'>
        <div className='Left_Section'>
                <Typography variant='h6' align='left' gutterBottom>
                        Contact
                </Typography>
                <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
          123 Main Street, City, Country
        </Typography>
        <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
          Phone: +1234567890
        </Typography>
        <Typography variant='subtitle1' align='left' color="textSecondary" component="p">
              info@ aiwjdiawd.com
        </Typography>
        </div>
        <div className='Middle_Section'>
            <Typography variant='subtitle1' align='center' color="textSecondary" component="p">
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
            </Typography>
        </div>
    </div>
  )
}

export default Footer
