import ecommerce from '../../assets/images/shopping.png'
import './Navbar.css'

export function Navbar() {
    //const [product, setProduct] = useState([]);
    function handleKeyDown(event) {
        if (event.key === "Enter") {
            console.log("hello");
        } else if (event.key === "Escape") {
            console.log("clear");
        }
    }

    return (
        <nav className="navbar">

            {/* LEFT */}
            <div className="logo">
                <img src={ecommerce} alt="logo" />
            </div>

            {/* CENTER */}
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    onKeyDown={handleKeyDown}
                    placeholder="Search products..."
                />

                <button className="search-button">
                    Search
                </button>
            </div>

            {/* RIGHT */}
            <div className="nav-right">

                <button className="orders-btn">
                    Orders
                </button>

                <div className="cart-icon">
                    🛒
                </div>

            </div>

        </nav>
    );
}