import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  colors
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { getInitials } from 'src/utils/get-initials';
import { color, padding, style } from '@mui/system';



export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);


  return (
    //color de la parte inferior de la tabla donde estan los cambios de pagina
    <Card 
    //sx={{ backgroundColor: '#35A1F0' }}
    >
      <Scrollbar >
        <Box sx={{ minWidth: 800 }}>

          <Table >
          
            <TableHead>
          
              <TableRow >
                
                <TableCell 
                 padding="checkbox"
                >
                  <Checkbox
                  //sx={{ backgroundColor: '#35A1F0' }}
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                
                <TableCell >
                  Codigó
                </TableCell  >
                <TableCell >
                  Area
                </TableCell>
                <TableCell>
                  Descripción
                </TableCell>
                <TableCell>
                  Cantidad
                </TableCell>
                {/* <TableCell>
                  Signed Up
                </TableCell> */}
                
              </TableRow>
              
            </TableHead>
           
            <TableBody 
            //color del cuerpo de la tabla
           // sx={{ backgroundColor: '#35A1F0' }}
            >
              {items.map((customer) => {
                const isSelected = selected.includes(customer.id);
                const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={isSelected}
                  
                  >
                    <TableCell padding="checkbox"
                    //color de la columna de los checkbox
                   // sx={{ backgroundColor: '#35A1F0' }}
                    >
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(customer.id);
                          } else {
                            onDeselectOne?.(customer.id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell >
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                        
                      >
                        {/* <Avatar src={customer.avatar}>
                          {getInitials(customer.name)}
                        </Avatar> */}
                        <Typography variant="subtitle2" >
                          {customer.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell >
                      {customer.email}
                    </TableCell>
                    <TableCell>
                      {customer.address.city}
                    </TableCell>
                    <TableCell>
                      {customer.phone}
                    </TableCell>
                    {/* <TableCell>
                      {createdAt}
                    </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          
        </Box>
      </Scrollbar>
      <TablePagination
      //color de la paginacion
      //sx={{ backgroundColor: '#35A1F0' }}
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomersTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};

