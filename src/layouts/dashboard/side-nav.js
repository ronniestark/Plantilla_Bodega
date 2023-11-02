import NextLink from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import ArrowTopRightOnSquareIcon from "@heroicons/react/24/solid/ArrowTopRightOnSquareIcon";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Logo } from "src/components/logo";
import { Scrollbar } from "src/components/scrollbar";
import { items } from "./config";
import { SideNavItem } from "./side-nav-item";

export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const content = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
        },
        "& .simplebar-scrollbar:before": {
          background: "neutral.400",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {/* ESTILO DEL CUADRADO DONDE ESTA EL LOGO Y EL TEXTO DE LA UNI */}
        <Box sx={{ p: 3, background: "#1A237E" }}>
          <Box
            component={NextLink}
            href="/"
            // SE COMENTAREO ESTO PARA PODER MODIFICAR MANUALMENTE EL TAMANO DEL LOGO
            // sx={{
            //   display: 'inline-flex',
            //   height: 32,
            //   width: 32
            // }}
          >
            <Typography
              variant="subtitle1"
              style={{
                fontSize: "15px",
                fontweight: "bold",
                color: "white",
                position: "absolute",
                top: "30px",
                left: "110px",
              }}
            >
              SISTEMA DE INVENTARIO UNIVERSITARIO SIU
            </Typography>
            <Logo />
          </Box>
          {/* ESTILO DE LA CAJITA DONDE DICE SIU */}
          <Box
            sx={{
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              borderRadius: 1,
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              p: "12px",
            }}
          >
            <div>
              <Typography color="inherit" variant="subtitle1"></Typography>
              <Typography color="neutral.400" variant="body2">
                UNIVERSIDAD NACIONAL DE INGENIERIA UNI
                <img src={"/assets/logos/UNI.png"} width="30" height="20"
                style={{ verticalAlign: 'middle', display: 'inline-block', marginLeft: '5px' }}
                />
              </Typography>
            </div>
            {/* <SvgIcon
              fontSize="large"
              sx={{ color: 'neutral.500' }}
            >
              <ChevronUpDownIcon />
            </SvgIcon> */}
          </Box>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        {/* ESTILO DEL NAV DONDE SE SELECIONAN LAS PAGINAS */}
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
            //COLOR NEGRO
            background: "#1A237E",
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: "none",
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              const active = item.path ? pathname === item.path : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: "neutral.700" }} />
        <Box
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              mt: 2,
              mx: "auto",
              width: "160px",
              "& img": {
                width: "100%",
              },
            }}
          ></Box>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.800",
            color: "common.white",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.800",
          color: "common.white",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
