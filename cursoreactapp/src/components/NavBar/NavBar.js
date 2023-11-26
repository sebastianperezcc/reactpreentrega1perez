import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return (
    <nav>
        <h3>Ecommerce</h3>
        <div>
            <button>Cañas</button>
            <button>Reels</button>
            <button>Carpas</button>
        </div>
        <CartWidget />
    </nav>
)

}

export default NavBar