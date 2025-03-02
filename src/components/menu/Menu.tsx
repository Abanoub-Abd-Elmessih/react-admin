import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

export const Menu = () => {
  return (
    <aside className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link key={listItem.id} className="listItem" to={listItem.url}>
              <img src={listItem.icon} alt={listItem.title} />
              <span className="istItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
};
