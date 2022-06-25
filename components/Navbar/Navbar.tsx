import { useState, MutableRefObject, useEffect, useRef } from "react"

const Navbar = () => {
	const hamburgerRef = useRef() as MutableRefObject<HTMLButtonElement>
	const navMenuRef = useRef() as MutableRefObject<HTMLUListElement>

	const [showMobileMenu, setShowMobileMenu] = useState(false)

	function toggleMobileMenu() {
		setShowMobileMenu(!showMobileMenu)
		if (showMobileMenu) {
			hamburgerRef.current.classList.toggle("active")
			navMenuRef.current.classList.toggle("active")
		} else {
			hamburgerRef.current.classList.remove("active")
			navMenuRef.current.classList.remove("active")
		}
	}

	useEffect(() => {}, [])

	return (
		<nav className="navbar">
			<a href="#" className="nav-logo">
				RR
			</a>
			<ul className="nav-menu" ref={navMenuRef}>
				<li className="nav-item">
					<a className="nav-link" href="#" onClick={toggleMobileMenu}>
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#about" onClick={toggleMobileMenu}>
						About
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#projects" onClick={toggleMobileMenu}>
						Projects
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#resume" onClick={toggleMobileMenu}>
						Resume
					</a>
				</li>
			</ul>
			<button
				onClick={toggleMobileMenu}
				className="hamburger"
				ref={hamburgerRef}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
		</nav>
	)
}

export default Navbar
