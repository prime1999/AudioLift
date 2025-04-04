import { motion } from "framer-motion";
import { headphone, listen, lyrics } from "../lib/imageExport";

const ImageForMobileHome = () => {
	return (
		<div className="flex items-center justify-start">
			<motion.div
				className="flex w-16 h-16 justify-center items-center rounded-[100%] p-1 bg-slate-100"
				initial={{ x: 100, y: 200, opacity: 0 }}
				animate={{ x: 0, y: 0, opacity: 1 }}
				transition={{ duration: 2, ease: "easeInOut" }}
			>
				<img src={listen} alt="" className="w-[60px] h-[60px] rounded-[100%]" />
			</motion.div>
			<motion.div
				className="flex w-16 h-16 justify-center items-center -ml-6 rounded-[100%] p-1 bg-slate-100"
				initial={{ x: 100, y: -100, opacity: 0 }}
				animate={{ x: 0, y: 0, opacity: 1 }}
				transition={{ duration: 2, ease: "easeInOut" }}
			>
				<img
					src={headphone}
					alt="headphone image"
					className="w-[60px] h-[60px] rounded-[100%]"
				/>
			</motion.div>
			<motion.div
				className="flex w-16 h-16 justify-center items-center -ml-6 rounded-[100%] p-1 bg-slate-100"
				initial={{ x: "100%", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
			>
				<img src={lyrics} alt="" className="w-[60px] h-[60px] rounded-[100%]" />
			</motion.div>
		</div>
	);
};

export default ImageForMobileHome;
