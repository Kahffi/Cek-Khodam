import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";
import { LOADING_DURATION } from "../hooks/useGetKhodam";

import smokeBg from "../assets/images/smoke.gif";

export default function CrystalBall() {
	const { isPending, data } = useContext(AppContext);
	const loadingRef = useRef(null);
	const imageRef = useRef(null);

	return (
		<div
			className=" flex justify-center place-items-center
         h-64 w-64 rounded-full border-4 border-slate-50 overflow-hidden"
		>
			{data && !isPending && (
				<img src={data.image} className="w-full, h-full" />
			)}
			{isPending && (
				<img
					src={smokeBg}
					ref={loadingRef}
					className={`w-full h-full transition animate-[disappear_${LOADING_DURATION.toString()}ms_ease-out]`}
				/>
			)}
		</div>
	);
}
