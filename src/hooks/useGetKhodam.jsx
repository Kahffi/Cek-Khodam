import { useState } from "react";
import KHODAMS from "../utils/Khodam";

export const LOADING_DURATION = 100;

export default function useGetKhodam() {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isError, setIsError] = useState(false);

	function getKhodam(date) {
		setIsPending(true);
		console.log(date);
		if (date < 1 || date > 31) {
			setIsError(true);
			setIsPending(false);
			return;
		}
		setTimeout(() => {
			setData({ ...KHODAMS[date - 1] });
			setIsPending(false);
		}, LOADING_DURATION);
	}

	return { data, isPending, isError, getKhodam };
}
