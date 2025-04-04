import { easeInOut, motion } from "framer-motion";
import { MdHeadphonesBattery } from "react-icons/md";
import {
	headphone,
	listen,
	lyrics,
	mainCard,
	mainPortrait,
	music,
	mediumScreen,
} from "../lib/imageExport";
import ImageForMobileHome from "../components/ImageForMobileHome";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<>
			<section className="mt-24">
				<div className="flex flex-col justify-between w-10/12 mx-auto mt-12 gap-4 md:flex-row">
					<div className="w-11/12 lg:w-1/3">
						<p className="font-inter font-semibold text-gray-600">With</p>
						<h1 className="font-main font-bold text-5xl mb-8 lg:text-6xl">
							AUDIO<span className="text-yellow-500">-LIFT</span>
						</h1>
						<hr className="border-gray-400" />
						<p className="my-4 font-inter text-sm">
							<span className="font-semibold">
								Unlock the Soundtrack of Your Videos
							</span>{" "}
							– Extract, Download, and Enjoy Crisp Audio in Just a Few Clicks –
							Fast, Simple, and Hassle-Free!
						</p>
						<span className="flex items-center mb-4">
							<MdHeadphonesBattery className="text-3xl" />{" "}
							<p className="font-inter text-sm ml-2 font-semibold">
								Focus on the sound
							</p>
						</span>
						<hr className="border-gray-400" />
						<motion.button
							className="relative bg-yellow-500 py-2 px-4 mt-4 rounded-3xl overflow-hidden lg:mt-12"
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
							<NavLink
								to="/extract"
								className="relative z-10 text-sm font-semibold"
							>
								Start for Free
							</NavLink>
						</motion.button>
						<div className="hidden md:block md:mt-4 lg:hidden">
							<ImageForMobileHome />
						</div>
					</div>
					<div className="hidden w-2/3 h-[400px] justify-end md:flex">
						<div>
							<div className="flex gap-4">
								<motion.div
									className="bg-slate-100 p-4 mr-2 w-[200px] h-[200px] rounded-lg hidden lg:block"
									initial={{ y: 100, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 2, ease: easeInOut }}
								>
									<img
										src={mainCard}
										alt="man listening to music"
										className="w-full rounded-lg"
									/>
									<div className="font-inter text-xs font-semibold mt-2 text-center">
										<p>Extract Audio from vidoes</p>
										<span className="">
											<img
												src={music}
												alt="music image"
												className="w-10/12 mx-auto -mt-2"
											/>
										</span>
									</div>
								</motion.div>
								<div className="relative">
									<motion.img
										src={mainPortrait}
										alt="man listening to music"
										className="w-[270px] h-[400px] rounded-lg"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 2, ease: easeInOut }}
									/>
									<motion.div
										className="absolute -bottom-10 -right-10 font-inter text-xs bg-slate-100 rounded-lg p-4 w-[100px]"
										initial={{ x: 200, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ duration: 2, ease: easeInOut }}
									>
										<h4 className="font-bold text-xl">32%</h4>
										<p>extracting...</p>
									</motion.div>
									<motion.div
										className="absolute -right-10 top-20 rounded-[100%] p-1 bg-slate-100 hidden lg:block"
										initial={{ x: 100, y: 200, opacity: 0 }}
										animate={{ x: 0, y: 0, opacity: 1 }}
										transition={{ duration: 2, ease: easeInOut }}
									>
										<img
											src={listen}
											alt=""
											className="w-[60px] h-[60px] rounded-[100%]"
										/>
									</motion.div>
									<motion.div
										className="absolute -right-10 top-10 rounded-[100%] p-1 bg-slate-100 hidden lg:block"
										initial={{ x: 100, y: -100, opacity: 0 }}
										animate={{ x: 0, y: 0, opacity: 1 }}
										transition={{ duration: 2, ease: easeInOut }}
									>
										<img
											src={headphone}
											alt="headphone image"
											className="w-[40px] h-[40px] rounded-[100%]"
										/>
									</motion.div>
									<motion.div
										className="absolute -left-10 bottom-10 rounded-[100%] p-1 bg-slate-100 hidden lg:block"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 2, ease: easeInOut, delay: 1 }}
									>
										<img
											src={lyrics}
											alt=""
											className="w-[50px] h-[50px] rounded-[100%]"
										/>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
					<div className="md:hidden">
						<ImageForMobileHome />
					</div>
				</div>
				<div className="hidden md:block lg:hidden">
					<img src={mediumScreen} alt="" />
				</div>
			</section>
		</>
	);
};

export default Home;
