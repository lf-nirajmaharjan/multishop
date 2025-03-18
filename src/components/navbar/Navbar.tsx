import { navbarItems } from "../../constants/navbar";

const Navbar = () => {
  return (
    <div className="navbar-nav mr-auto py-0">
      <ul className="d-flex align-items-center list-unstyled m-0">
        {navbarItems.map((item, i) => {
          return (
            <li key={i}>
              {item.subMenu ? (
                <>
                  <a href={item.path} className="nav-item nav-link">
                    {item.name}
                  </a>

                  <ul className="dropdown-menu bg-primary rounded-0 border-0 list-unstyled m-0">
                    {item.subMenu.map((subItem, i) => {
                      return (
                        <li key={i}>
                          <a href={subItem.path} className="dropdown-item">
                            {subItem.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <a href={item.path} className="nav-item nav-link">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
