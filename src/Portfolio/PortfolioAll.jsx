import {
Link
} from "react-router-dom";

export default function PortfolioAll() {
return (
<div className="portfolioFiltre">
    <ul className="uk-subnav uk-subnav-pill flex content-center justify-center ">
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
    <ul className=" portfolioImg flex content-center justify-center flex-wrap">

        <li uk-lightbox="animation: fade">

            <div>
                <a href="https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif">
                    <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif" alt="1" />
                </a>
            </div>

        </li>
        <li uk-lightbox="animation: fade">

            <div>
                <a href="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif">
                    <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif" alt="1" />
                </a>
            </div>

        </li>
        <li uk-lightbox="animation: fade">

            <div>
                <a href="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif">
                    <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif" alt="1" />
                </a>
            </div>

        </li>
        {/* ici */}
        <li uk-lightbox="animation: fade">

<div>
    <a href="https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif">
        <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif" alt="1" />
    </a>
</div>

</li>
<li uk-lightbox="animation: fade">

<div>
    <a href="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif">
        <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif" alt="1" />
    </a>
</div>

</li>
<li uk-lightbox="animation: fade">

<div>
    <a href="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif">
        <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif" alt="1" />
    </a>
</div>

</li><li uk-lightbox="animation: fade">

<div>
    <a href="https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif">
        <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif" alt="1" />
    </a>
</div>

</li>
<li uk-lightbox="animation: fade">

<div>
    <a href="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif">
        <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/xT0xeQzcF9AmsPbB6w/giphy.gif" alt="1" />
    </a>
</div>

</li>
<li uk-lightbox="animation: fade">

<div>
    <a href="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif">
        <img uk-scrollspy="cls:uk-animation-fade delay: 500; repeat: true" src="https://media.giphy.com/media/3rgXBDsgM9H2jHAB56/giphy.gif" alt="1" />
    </a>
</div>

</li>
    </ul>
</div>
);
}