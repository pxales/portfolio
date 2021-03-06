import { Link } from "react-router-dom";
import { entriesIllu } from "../services/contentfulConfig";

export default function PortfolioIllu() {
  return (
    <div className="portfolioFiltre">
      <ul className="uk-subnav uk-subnav-pill flex content-center justify-center">
        <li className="filtreNav">
          <Link to="/portfolio">Tout</Link>
        </li>
        <li className="filtreNav">
          <Link to="/illustration">Illustrations</Link>
        </li>
        <li className="filtreNav">
          <Link to="/games">Jeux</Link>
        </li>
        <li className="filtreNav">
          <Link to="/3d">3D</Link>
        </li>
      </ul>
      <ul className="portfolioImg flex content-center justify-center flex-wrap">
        {entriesIllu.map((entry) => (
          <li key={entry.id} uk-lightbox="animation: fade">
            {" "}
            <div>
              <a href={entry.file.url}>
                <img
                  className="m-2 max-w-xs md:max-w-md"
                  uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true"
                  src={entry.thumbnail}
                  alt=""
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
