import Main from '@/screens/dashboard/main/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Main page',
	description: 'Main page'
}

export default function Page() {
	return <Main/>
}
