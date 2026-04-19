import Banner from "../banner/Banner";
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <header className="max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto ">
            <Nav></Nav>
            <Banner></Banner>
        </header>
    );
};
export default Header;