import * as React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import { LoremIpsum } from 'react-lorem-ipsum';
import {TableRow, TableCell, IconButton,Collapse, Box,Checkbox } from '@mui/material';
import {Link} from 'react-router-dom'

function FoodTableItem(props) {
  const { drink } = props;
  const [open, setOpen] = React.useState(false);
  console.log({drink});
  return (
    
      <>
        <TableRow sx={{'& > *' : {borderBottom: 'unset'} }}>
          <TableCell>
            <IconButton 
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}  
            >
              {open ? <FaAngleUp/> : <FaAngleDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {drink.id}
          </TableCell>
          <TableCell><Link to='#'>{drink.name}</Link></TableCell>
          <TableCell>{drink.description}</TableCell>
          <TableCell align='center'><Checkbox /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{margin: 1}}>
                <div className="text-wrapper">
                  <LoremIpsum p={2} />
                </div>
              </Box>

            </Collapse>
          </TableCell>

        </TableRow>
      </>

  );
}

export default FoodTableItem
