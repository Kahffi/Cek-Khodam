import { createContext, useState } from "react";
import useGetKhodam from "./hooks/useGetKhodam";
import CrystalBall from "./components/CrystalBall";

import headerBg from "./assets/images/Candle_Dark.jpg";

export const AppContext = createContext(null);

const rarityMap = [
	{ rarity: "Z", style: "text-red-700" },
	{ rarity: "D", style: "text-orange-600" },
	{ rarity: "C", style: "text-yellow-500" },
	{ rarity: "B", style: "text-lime-600" },
	{ rarity: "A", style: "text-violet-600" },
	{ rarity: "S", style: "text-purple-600" },
	{ rarity: "", style: "" },
];

function App() {
	const { data, isError, isPending, getKhodam } = useGetKhodam();

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(formData, "formdata");
		const date = formData.get("date");
		getKhodam(date);
	}

	return (
		<AppContext.Provider value={{ data, isError, isPending }}>
			<div
				id="hero"
				className="flex flex-col justify-center items-center font-IMFell bg-slate-800 min-h-screen italic bg-fixed bg-center bg-cover bg-no-repeat text-slate-50"
			>
				<header className="text-8xl p-14 italic w-full ">
					<h1 className="text-center">CEK KHODAM GERATIS</h1>
				</header>
				<main className="flex flex-col items-center min-w-full gap-10">
					<form onSubmit={handleSubmit}>
						<div className="flex gap-12 items-end">
							<div className="flex-col flex">
								<label htmlFor="name" className="text-xl">
									Nama
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									className="bg-slate-50/30 rounded-md h-7 min-w-72 text-xl py-4 px-2 italic"
								/>
							</div>
							<div className="flex-col flex">
								<label className="text-xl" htmlFor="date">
									Tanggal Lahir
								</label>
								<input
									id="date"
									name="date"
									type="number"
									max={31}
									required
									className="bg-slate-50/30 rounded-md h-7 max-w-32 text-xl py-4 px-2 italic"
								/>
							</div>
							<button
								type="submit"
								className="text-slate-950 bg-slate-50 py-1 px-4 rounded-lg text-xl font-medium italic"
							>
								Cek Khodam
							</button>
						</div>
					</form>
					<section className="flex flex-col items-center gap-7 p-10">
						{data || isPending ? (
							<div className="flex flex-col items-center gap-3">
								<CrystalBall />
								{data && !isPending && (
									<h2 className="text-5xl">{data.name}</h2>
								)}
							</div>
						) : null}

						{data && !isPending && (
							<article className="flex flex-col items-center gap-6 w-1/2 max-w-7xl text-2xl bg-slate-500/70 p-5 rounded-md">
								{data && <p>{data.description}</p>}
								{data && (
									<div className="flex flex-col items-center gap-3">
										<p className="text-xl">Rating Khodam:</p>
										<h2
											className={`text-8xl not-italic ${
												rarityMap[data.rarity].style
											}`}
										>
											{rarityMap[data.rarity].rarity}
										</h2>
									</div>
								)}
							</article>
						)}
					</section>
				</main>
			</div>
		</AppContext.Provider>
	);
}

export default App;
