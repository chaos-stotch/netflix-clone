import { PlayArrow, InfoOutlined } from "@material-ui/icons"
import "./featured.scss"

function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type==="movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}

        <img width="100%" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hdwallpaper.nu%2Fwp-content%2Fuploads%2F2017%2F04%2Fbreaking_bad-7.jpg&f=1&nofb=1&ipt=b5334f94c96873fb496535a9ada7023bae911cfa125f81d3d222feef1fde8262&ipo=images" alt="" />
        <div className="info">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fbreaking-bad-png-breaking-bad-icon-png-50-px-1600.png&f=1&nofb=1&ipt=c65158bf54c69f431c99940200fb74489cbb736cb3bd2bff186bd9ee93203699&ipo=images" alt="" />
            <span className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem consectetur illum quo non impedit, quam facere aliquid, ipsa voluptatem dolores, quas odio quaerat.
                Quo exercitationem aliquid accusamus omnis pariatur sequi!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured