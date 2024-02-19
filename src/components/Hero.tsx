const Hero = () => {
	return (
		<div className="relative uppercase w-screen h-screen flex">
			<div className="flex-grow flex flex-col justify-center items-center sm:items-start p-16">
				<h3 className="text-sm lg:text-xl sm:pl-2 font-semibold">
					Season 2
				</h3>
				<h2 className="text-4xl text-center sm:text-left md:text-6xl lg:text-8xl font-bold">
					Belfort of wallstreet
				</h2>
				<a className="bg-black hover:bg-slate-800 cursor-pointer text-white px-4 py-2 lg:px-8 lg:py-4 font-semibold mt-8 lg:text-xl rounded-full">
					Register now
				</a>
			</div>
			<div className="hidden sm:flex bg-yellow-400 divide-y-8 font-semibold rounded-bl-3xl w-2/6 flex-col justify-end gap-4 sm:text-4xl md:text-5xl lg:text-6xl tracking-wider p-10 h-5/6">
				<div>Ideate</div>
				<div>design</div>
				<div>develop</div>
				<div>test</div>
				<div>pitch</div>
			</div>
			<div className="absolute bottom-16 left-0 bg-black px-16 py-5 rounded-r-2xl text-white">
				date <span className="font-bold">28,29</span> feb
			</div>
		</div>
	);
};

export default Hero;
