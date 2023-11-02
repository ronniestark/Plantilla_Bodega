import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Inicio",
    path: "/",
    icon: (
      <img
        src={"/assets/logos/casa.png"}
        width="24"
        height="24"
        style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
      />
    ),
  },

  {
    title: "Catalogo",
    path: "/",
    icon: (
      <img
        src={"/assets/logos/catalogo.png"}
        width="24"
        height="24"
        style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
      />
    ),
  },
  {
    title: "Area",
    path: "/",
    icon: (
      <img
        src={"/assets/logos/area.png"}
        width="24"
        height="24"
        style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
      />
    ),
  },
  

  {
    title: "Bodega",
    path: "/customers",
    icon: (
      <img
      src={"/assets/logos/tienda.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },
  {
    title: "Categoria",
    path: "/companies",
    icon: (
      <img
      src={"/assets/logos/categoria.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },
  {
    title: "Producto",
    path: "/account",
    icon: (
      <img
      src={"/assets/logos/producto.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },
  {
    title: "Proveedor",
    path: "/settings",
    icon: (
      <img
      src={"/assets/logos/proveedor.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },
  {
    title: "Uni. Medida",
    path: "/auth/login",
    icon: (
      <img
      src={"/assets/logos/medida.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },
  {
    title: "Ubicacion",
    path: "/auth/register",
    icon: (
      <img
      src={"/assets/logos/ubicacion.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },
  {
    title: "Inventario",
    path: "/404",
    icon: (
      <img
      src={"/assets/logos/inventario.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },

  {
    title: "Ajuste. Inventario",
    path: "/404",
    icon: (
      <img
      src={"/assets/logos/ajuste.png"}
      width="24"
      height="24"
      style={{ display: "block" }} // Añade esto para centrar el icono verticalmente
    />
    ),
  },
];
