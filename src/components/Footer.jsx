import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="absolute bottom-0 w-full font-inter text-sm">
			<div className="mb-2 w-11/12 mx-auto flex justify-center items-center">
				<h6>
					© {new Date().getFullYear()}{" "}
					<NavLink to="/" className="text-md font-main font-semibold">
						Eminence
					</NavLink>
					. All rights reserved.
				</h6>
			</div>
		</footer>
	);
};

export default Footer;
