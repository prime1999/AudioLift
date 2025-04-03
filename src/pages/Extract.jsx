import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaFileArrowUp, FaRegFileAudio } from "react-icons/fa6";
import { GrDocumentSound } from "react-icons/gr";
import { MdDownloadForOffline } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

const ffmpeg = new FFmpeg({ log: true });

const Extract = () => {
	const baseURL = "/ffmpeg/";
	const controllerRef = useRef(null);
	const [isAborted, setIsAborted] = useState(false);
	const [videoURL, setVideoURL] = useState("");
	const [progress, setProgress] = useState(0);
	const [uploaded, setUploaded] = useState(null);
	const [audioUrl, setAudioUrl] = useState("");
	// for the file drop using dropzone
	const { getInputProps, getRootProps } = useDropzone({
		accept: "video/*",
		onDrop: (acceptedFile) => {
			// check if only one file was uploaded
			if (acceptedFile.length > 1) {
				console.log("Can only drop one file at once");
				return;
			}
			handleFileUpload(acceptedFile[0]);
		},
	});

	// function to handle the file upload
	const handleFileUpload = (videoFile) => {
		if (!videoFile) {
			console.log("Error uploading file, please try again");
		}

		setUploaded(videoFile);
		// the the url to the video for further use
		setVideoURL(URL.createObjectURL(videoFile));
	};

	// function to extract the audio file
	const handleFileExtraction = async (videoFile) => {
		try {
			ffmpeg.on("log", ({ message }) => {
				console.log("[FFmpeg]", message);
			});
			// load the file on ffmpeg
			await ffmpeg.load({
				coreURL: await toBlobURL(`${baseURL}ffmpeg-core.js`, "text/javascript"),
				wasmURL: await toBlobURL(
					`${baseURL}ffmpeg-core.wasm`,
					"application/wasm"
				),
			});

			await ffmpeg.writeFile("input.mp4", await fetchFile(videoFile));

			// track progress
			ffmpeg.on("progress", (ratio) => {
				setProgress(Math.round(ratio.progress * 100));
			});

			if (isAborted) {
				console.log("Extraction was aborted.");
				return;
			}

			// Determine output format
			const outputFile = "output.mp3";
			// extract the audio from the video
			await ffmpeg.exec([
				"-i",
				"input.mp4",
				"-q:a",
				"0",
				"-map",
				"a",
				outputFile,
			]);
			// read the audio extracted to get the file details
			const data = await ffmpeg.readFile(outputFile);
			const audioReturn = new Blob([data.buffer], {
				type: "audio/mp3",
			});
			// Create a Blob URL from the extracted audio file
			setAudioUrl(URL.createObjectURL(audioReturn));
		} catch (error) {
			console.log(`Error: ${error}`);
		}
	};

	// function to cansel the extraction
	const handleCancel = () => {
		console.log(ffmpeg);
		setIsAborted(true); // Set abort flag to true
		ffmpeg.terminate("input.mp4"); // Optionally clean up
		ffmpeg.terminate("output.mp3"); // Optionally clean up
		console.log("FFmpeg process aborted");
	};
	return (
		<section className="flex flex-col items-center justify-center w-1/2 mx-auto mt-4">
			<div
				{...getRootProps()}
				className="w-11/12 mx-auto flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-600 p-4 cursor-pointer"
			>
				{uploaded ? (
					<motion.div
						className="relative w-[300px] h-[150px]"
						whileHover="hover"
					>
						<video src={videoURL} width="300" height="150" controls />
						<motion.span
							className="absolute top-20 -right-10 bg-yellow-600 font-inter text-xs text-white px-2 py-1 rounded-full"
							initial={{ y: -10, opacity: 0 }}
							variants={{ hover: { y: 0, opacity: 1 } }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
						>
							<p>{uploaded.name}</p>
						</motion.span>
					</motion.div>
				) : (
					<FaFileArrowUp className="text-6xl text-yellow-500 my-4" />
				)}
				<input {...getInputProps()} />
				<p className="font-inter text-sm flex flex-col items-center font-semibold mt-6">
					Drag & Drop a video file here,
					<span className="mt-2 text-gray-600"> or click to select one</span>
				</p>
			</div>
			{uploaded && (
				<motion.button
					onClick={() => handleFileExtraction(uploaded)}
					className="relative bg-yellow-500 py-2 px-4 mt-2 text-white rounded-lg overflow-hidden"
					whileHover="hover"
				>
					<motion.span
						className="absolute w-full h-full bg-yellow-600 left-0 top-0 rounded-lg"
						initial={{ x: "-100%" }}
						variants={{
							hover: {
								x: "0%",
								transition: { duration: 0.5, ease: "easeInOut" },
							},
						}}
					/>
					<span className="relative flex items-center justify-center z-10 text-sm font-semibold">
						<p>Extract Audio</p> <GrDocumentSound className="text-md ml-2" />
					</span>
				</motion.button>
			)}
			{uploaded && (
				<div className="mt-2 font-inter">
					<h6 className="mb-2 text-sm font-semibold">
						{progress < 100 ? "Extracting..." : "Audio Extracted"}
					</h6>
					<div className="flex items-center gap-2 p-4 bg-yellow-50 rounded-xl">
						<FaRegFileAudio className="text-3xl mb-2" />
						<div>
							<div className="flex justify-between items-center gap-2 mb-2">
								<p className="font-inter text-xs font-semibold">
									{uploaded.name}
								</p>

								{progress < 100 ? (
									<button
										onClick={() => handleCancel()}
										className="w-6 h-6 flex justify-center items-center rounded-[100%] text-xs font-inter font-semibold border border-gray-500 p-2"
									>
										X
									</button>
								) : (
									<button
										onClick={() => {
											const a = document.createElement("a");
											a.href = audioUrl;
											a.download = "extracted_audio.mp3";
											document.body.appendChild(a);
											a.click();
											document.body.removeChild(a);
										}}
									>
										<MdDownloadForOffline className="text-2xl" />
									</button>
								)}
							</div>
							<div className="flex items-center gap-4">
								<div className="h-2 w-[500px] rounded-full bg-yellow-100">
									<motion.div
										className="bg-yellow-600 h-full rounded-full"
										style={{ width: `${progress}%` }}
										initial={{ width: 0 }}
										animate={{ width: `${progress}%` }}
										transition={{ duration: 0.5, ease: "easeInOut" }}
									/>
								</div>
								<p className="text-xs font-inter font-semibold">{progress}%</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Extract;
