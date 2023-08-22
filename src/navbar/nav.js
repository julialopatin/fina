import "/nav.css"

const Navbar = () => {
    return (
        <><div classname="navbar">
            <div className="navContainer">
                <span className="logo">littel lemon</span>
                <div className="navItems">
                    <button className="home"></button>
                    <button className="about"></button>
                    <button className="meny"></button>
                    <button className="reservation"></button>
                    <button className="order onilne"></button>
                    <button className="sign in"></button>
                    <img src={require('lemon.png')} alt='little lemon logo'></img>
                </div>
            </div>
        </div></>
    );
};
