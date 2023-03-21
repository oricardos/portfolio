import style from "./Menu.module.css";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const menuItem = [
    {
      text: "Home",
    },
    {
      text: "Projetos",
    },
    {
        text: "Blog",
    },
  ];

  return (
    <div>
      <ul className="flex">
        {menuItem.map((item, index) => (
          <div key={index}>
            <MenuItem text={item.text} />
          </div>
        ))}
      </ul>
    </div>
  );
};
