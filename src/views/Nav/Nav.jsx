import "./Nav.css";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <a
        className={
          splitLocation[1] === "ProfileView"
            ? "flex-sm-fill text-sm-center nav-link active"
            : "flex-sm-fill text-sm-center nav-link"
        }
        href="/ProfileView"
      >
        Profile
      </a>

      <a
        className={
          splitLocation[1] === "TranslationView"
            ? "flex-sm-fill text-sm-center nav-link active"
            : "flex-sm-fill text-sm-center nav-link"
        }
        href="/TranslationView"
      >
        Translation
      </a>
    </nav>
  );
}

//aria-current="page"
// className={`${className}`}
