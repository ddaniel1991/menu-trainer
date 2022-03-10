import * as React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import { LoremIpsum } from 'react-lorem-ipsum';
import {TableRow, TableCell, IconButton,Collapse, Box,Checkbox,Card,CardMedia } from '@mui/material';
import {Link} from 'react-router-dom'

function FoodTableItem(props) {
  const { dish } = props;
  const [open, setOpen] = React.useState(false);
  console.log({dish});
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
            {dish.id}
          </TableCell>
          <TableCell><Link to='#'>{dish.name}</Link></TableCell>
          <TableCell>{dish.description}</TableCell>
          <TableCell align='center'><Checkbox /></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, }} colSpan={4}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{margin: 1}}>
                <div className="text-wrapper">
                  <Card>
                    <CardMedia 
                      component='img'
                      height='140'
                      image={`${dish.image}`}
                      alt={dish.name}
                    />
                  </Card>
                </div>
              </Box>

            </Collapse>
          </TableCell>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0, }} colSpan={8}>
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
