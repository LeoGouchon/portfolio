import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink to="/">
                    <img alt="MongoDB logo" className="h-10 inline"
                         src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img>
                </NavLink>
                <NavLink to="/create">
                    Create Employee
                </NavLink>
            </nav>
        </div>
    )
}