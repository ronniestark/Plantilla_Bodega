import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';

const now = new Date();


const data = [
  {
    id: '5e887ac47eed253091be10cb',
    address: {
      city: 'CAJA DE LAPICES',



    },

    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'NIC.NI',
    name: 'A-01',
    phone: '45' + ' ' + 'UNDS'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    address: {
      city: 'CAJA DE CUADERNOS',

    },

    createdAt: subDays(subHours(now, 1), 2).getTime(),
    email: 'RECTORIA', //AREA
    name: 'A-02', //CODIGO
    phone: '12' + ' ' + 'UNDS' //CANTIDAD
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    address: {
      city: 'CAJA DE BORRADORES', // DESCRIPCION


    },

    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: 'FACULTA DE ARQUITECTURA',
    name: 'A-03',
    phone: '19' + ' ' + 'CAJAS'
  },
  {
    id: '5e86809283e28b96d2d38537',
    address: {
      city: 'SILLAS DE OFICINA',

    },

    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: 'SECRETARIA',
    name: 'A-O4',
    phone: '10' + ' ' + 'UNDS'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    address: {
      city: 'LAMPARAS',

    },

    createdAt: subDays(subHours(now, 7), 3).getTime(),
    email: 'FINANZAS',
    name: 'A-05',
    phone: '50' + ' ' + 'UNDS'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    address: {
      city: 'LAPTOS',

    },

    createdAt: subDays(subHours(now, 5), 4).getTime(),
    email: 'TESORERIA',
    name: 'A-06',
    phone: '8' + ' ' + 'UNDS'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    address: {
      city: 'TECLADOS',

    },

    createdAt: subDays(subHours(now, 15), 4).getTime(),
    email: 'CONTABILIDAD',
    name: 'A-07',
    phone: '15' + ' ' + 'UNDS'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    address: {
      city: 'MOUSE',

    },

    createdAt: subDays(subHours(now, 2), 5).getTime(),
    email: 'DBE',
    name: 'A-08',
    phone: '7' + ' ' + 'UNDS'
  },
  {
    id: '5e8877da9a65442b11551975',
    address: {
      city: 'UPS',

    },

    createdAt: subDays(subHours(now, 8), 6).getTime(),
    email: 'PIENSA',
    name: 'A-09',
    phone: '12' + ' ' + 'UNDS'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    address: {
      city: 'CAFE ',

    },

    createdAt: subDays(subHours(now, 1), 9).getTime(),
    email: 'COMEDOR',
    name: 'A-10',
    phone: '15' + ' ' + 'LBRS'
  }
];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head >
        <title >
          Customers | Devias Kit
        </title>
      </Head>
      {/* color de todo el fonndo de la pagina */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,

        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Bodega
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>

              <div>
                <Button
                  style={{
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    minWidth: 0,
                    marginRight: '8px',
                    backgroundColor: '#8BC1E8' ,
                  }}
                  variant="contained"
                  sx={{
                    '& .MuiButton-startIcon': {
                      margin: 'auto', // Centra el icono horizontalmente
                    },
                  }}
                  startIcon={
                    <img
                      src={'/assets/logos/add.png'}
                      width="24"
                      height="24"
                      style={{ display: 'block' }} // Añade esto para centrar el icono verticalmente
                    />
                  }
                >
                </Button>

                <Button
                  style={{
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    minWidth: 0,
                    marginRight: '8px',
                    backgroundColor: '#F2D275' ,
                  }}
                  variant="contained"
                  sx={{
                    '& .MuiButton-startIcon': {
                      margin: 'auto', // Centra el icono horizontalmente
                    },
                  }}
                  startIcon={
                    <img
                      src={'/assets/logos/edit.png'}
                      width="24"
                      height="24"
                      style={{ display: 'block' }} // Añade esto para centrar el icono verticalmente
                    />
                  }
                >
                </Button>

                {/* ESTE ESTILO DE BOTON SIRVE PERO NO CENTRA EL LOGO */}
                {/* <Button
                 style={{
                  borderRadius: '50%', // Establece el radio para que el botón sea redondo
                  width: '48px', // Ajusta el ancho del botón
                  height: '48px', // Ajusta la altura del botón
                  minWidth: 0, // Minimiza el ancho del botón
                  marginRight: '8px', // Agrega un margen derecho de 8px entre los botones
                  
                  
                }}
                  
                  variant="contained"
                  sx={{ backgroundColor: '#EC654A'
                 }}
                 startIcon={<img src={'/assets/logos/delete.png'} 
                  width="24" 
                  height="24" 
                  
                  />}
                >
                </Button> */}
                <Button
                  style={{
                    borderRadius: '50%',
                    width: '48px',
                    height: '48px',
                    minWidth: 0,
                    marginRight: '8px',
                    backgroundColor: '#EC654A',
                  }}
                  variant="contained"
                  sx={{
                    '& .MuiButton-startIcon': {
                      margin: 'auto', // Centra el icono horizontalmente
                    },
                  }}
                  startIcon={
                    <img
                      src={'/assets/logos/delete.png'}
                      width="24"
                      height="24"
                      style={{ display: 'block' }} // Añade esto para centrar el icono verticalmente
                    />
                  }
                >
                </Button>
              </div>




            </Stack>
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
