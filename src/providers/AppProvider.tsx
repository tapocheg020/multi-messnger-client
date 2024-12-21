'use client';
import store from "@/store/store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

export function AppProvider({ children }: PropsWithChildren) {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}