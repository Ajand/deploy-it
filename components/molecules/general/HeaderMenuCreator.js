import { HeaderMenuContainer, HeaderMenuButton } from "../../atoms";

const HeaderMenuCreator = ({ items }) => {
  return (
    <HeaderMenuContainer>
      {items.map(({ Icon, selected, route, onClick }) => (
        <HeaderMenuButton
          Icon={Icon}
          selected={selected}
          onClick={onClick}
          key={route}
        />
      ))}
    </HeaderMenuContainer>
  );
};

export default HeaderMenuCreator;
