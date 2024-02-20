export default function AboutComponent() {
	return (
		<div className="w-full flex flex-col gap-10 bg-[#171921] p-20 text-[#fff]">
			<div>
				<h2 className="text-4xl font-extrabold">
					WHAT IS{" "}
					<span className="text-[#F0BB42]">
						BELLFORT OF <br /> WALL STREET
					</span>{" "}
					?
				</h2>
			</div>
			<div className="flex gap-14 flex-wrap">
				<div className="flex-1 min-w-[200px]">
					<img src="/belfort.png" alt="" className="min-w-[300px]" />
				</div>
				<div className="flex-1 flex flex-col gap-10 justify-between min-w[200px]">
					<p className="text-3xl">
						<span className="text-[#F0BB42]">
							Belfort of Wall Street{" "}
						</span>
						by IEDC CCE, is where innovation meets entrepreneurship
						in a thrilling competition aimed at transforming ideas
						into impactful ventures. Through three dynamic rounds –{" "}
						<span className="text-[#F0BB42]">
							Ideation, Prototyping{" "}
						</span>
						and{" "}
						<span className="text-[#F0BB42]">
							Business Pitching, and Marketing{" "}
						</span>
						participants showcase their creativity, business acumen,
						and marketing prowess.
					</p>
					<div className="flex justify-between">
						<div className="flex flex-col gap-2 text-center">
							<p className="text-[#F0BB42] text-6xl font-extrabold ">
								30
							</p>
							<p className="text-xl font-bold uppercase">Hours</p>
						</div>
						<div className="flex flex-col gap-2 text-center">
							<p className="text-[#F0BB42] text-6xl font-extrabold">
								12 K
							</p>
							<p className="text-xl font-bold uppercase">
								prize pool
							</p>
						</div>
						<div className="flex flex-col gap-2 text-center">
							<p className="text-[#F0BB42] text-6xl font-extrabold">
								28,29
							</p>
							<p className="text-xl font-bold uppercase">
								February
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
