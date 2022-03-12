import * as React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa';
import {TableRow, TableCell, IconButton,Collapse, Box,Checkbox, List, ListItem, Card, CardMedia } from '@mui/material';
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
        <TableCell colSpan={3} style={{ paddingBottom: 0, paddingTop: 0, }} >
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{margin: 1}}>
                    <div>
                      <Card>
                        <CardMedia 
                          component='img'
                          height='140'
                          image={process.env.PUBLIC_URL + drink.image}
                          alt={drink.name}
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
                        {drink.ingredients.map((ingredient) => (
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
                    <List>
                      <ListItem>Dish 1</ListItem>
                      <ListItem>Dish 2</ListItem>
                      <ListItem>Dish 3</ListItem> 
                    </List>
                  </Box>
                
                </Collapse>

              </TableCell>

        </TableRow>
      </>

  );
}

export default FoodTableItem
