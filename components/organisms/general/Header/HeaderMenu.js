import { Home, Explore, Notifications } from "@mui/icons-material";
import { HeaderMenuCreator } from "../../../molecules";
import { useRouter } from "next/router";

const HeaderMenu = () => {
  const router = useRouter();

  console.log(router.asPath);

  const items = [
    {
      route: "/",
      Icon: <Home />,
      selected: false,
    },
    {
      route: "/explore",
      Icon: <Explore />,
      selected: false,
    },
    {
      route: "/notifications",
      Icon: <Notifications />,
      selected: false,
    },
  ].map((item) => ({
    ...item,
    selected: router.asPath === item.route,
    onClick: () => {
      router.push(item.route);
    },
  }));

  return <HeaderMenuCreator items={items} />;
};

export default HeaderMenu;
