import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="hidden w-11/12 mx-auto mt-2 justify-between items-center font-inter text-sm md:flex">
			<NavLink to="/" className="font-main font-bold text-3xl">
				AUDIO<span className="text-yellow-500">LIFT</span>
			</NavLink>
			<div>
				<ul className="flex justify-center items-center">
					<li className="mr-8 cursor-pointer font-semibold duration-500 hover:text-yellow-500">
						Get-Audio
					</li>
					<li className="mr-8 cursor-pointer font-semibold duration-500 hover:text-yellow-500">
						<NavLink to="/extract">Extract-Audio</NavLink>
					</li>
				</ul>
			</div>
			<motion.button
				className="relative bg-yellow-500 py-2 px-4 rounded-2xl overflow-hidden"
				whileHover="hover"
			>
				<motion.span
					className="absolute w-full h-full bg-yellow-600 left-0 top-0 rounded-2xl"
					initial={{ x: "-100%" }}
					variants={{
						hover: {
							x: "0%",
							transition: { duration: 0.5, ease: "easeInOut" },
						},
					}}
				/>
				<span className="relative z-10">Coming Soon</span>
			</motion.button>
		</nav>
	);
};

export default NavBar;
