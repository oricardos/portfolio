// import style from "./Menu.module.css";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const menuItem = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "Projetos",
      route: "projects",
    },
    {
        text: "Blog",
        route: "blog",
    },
  ];

  return (
    <div>
      <ul className="flex">
        {menuItem.map((item, index) => (
          <div key={index}>
            <MenuItem text={item.text} link={item.route} />
          </div>
        ))}
      </ul>
    </div>
  );
};
