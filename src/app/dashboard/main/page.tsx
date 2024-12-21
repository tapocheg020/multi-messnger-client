'use client'
import dynamic from 'next/dynamic'

const Main = dynamic(() => import('@/screens/dashboard/main/Main'), {
	ssr: false,
})

export default function Page() {
	return <Main />
}
