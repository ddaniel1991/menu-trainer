import * as React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import {TableRow, TableCell, IconButton,Collapse, Box,Card,CardMedia,List,ListItem } from '@mui/material';
import {Link} from 'react-router-dom'

function AdminTableItem(props) {
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
          <TableCell align='center'></TableCell>
        </TableRow>
        <TableRow>
              <TableCell colSpan={3} style={{ paddingBottom: 0, paddingTop: 0, }} >
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{margin: 1}}>
                    <div>
                      <Card>
                        <CardMedia 
                          component='img'
                          height='140'
                          image={process.env.PUBLIC_URL + dish.image}
                          alt={dish.name}
                        />
                      </Card>
                    </div>
                  </Box>

                </Collapse>
              </TableCell>
              <TableCell colSpan={1} style={{ paddingBottom: 0, paddingTop: 0, }} >
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{margin: 1}}> 
                    <div>
                      <h4 className='center-text underline'>Ingredients:</h4>
                      <List>
                        {dish.ingredients.map((ingredient) => (
                          <ListItem id='ingredient-list' key={ingredient}>{ ingredient }</ListItem>
                        ))}
                      </List>
                    </div>
                  </Box>
                </Collapse>
              </TableCell>
              <TableCell style={{ paddingBOttom: 0, paddingTop: 0}}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{margin:1}}> 
                    <div>
                      <h4 className='underline'>Pairs With:</h4>
                    </div>
                    <ul>
                      <li>Drink 1</li>
                      <li>Drink 2</li>
                      <li>Drink 3</li> 
                    </ul>
                  </Box>
                
                </Collapse>

              </TableCell>

        </TableRow>
      </>

  );
}

export default AdminTableItem
