import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const PublicNav = () => {
	const navigate = useNavigate()

	return (
		<nav className="navigationWrapper">
			<ul id="cursorNav" className="navbar">
				{/* <li className="navbar__item active">
					<Link className="navbar__link" to="/">Home</Link>
				</li> */}
				{/* <li className="navbar__item active">
					<Link className="navbar__link" to="/tickets">Today's Beans</Link>
				</li>
				<li className="navbar__item navbar__logout">
					<Link className="navbar__link" to="/admin">Admin Corner</Link>
				</li> */}
				{
					localStorage.getItem("toeBean_user")
						? <li className="navbar__item navbar__logout">
							<Link className="navbar__link" to="" onClick={() => {
								localStorage.removeItem("toeBean_user")
								navigate("/", { replace: true })
							}}>Logout</Link>
						</li>
						: ""
				}
			</ul>
		</nav>
	)
}