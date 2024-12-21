'use client';
import store from "@/store/store";
import { PropsWithChildren, useEffect } from "react";
import { Provider } from "react-redux";

export function AppProvider({ children }: PropsWithChildren) {
	useEffect(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker
				.register('/sw.js')
				.then((registration) => {
					console.log(
						'Service Worker registered with scope:',
						registration.scope
					)
				})
				.catch((error) => {
					console.error('Service Worker registration failed:', error)
				})
		}
	}, [])
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}