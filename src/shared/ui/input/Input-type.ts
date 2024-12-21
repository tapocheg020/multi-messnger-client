import { CSSProperties, ChangeEventHandler, JSX } from 'react'

export interface InputProps {
	onChange?: ChangeEventHandler<HTMLInputElement>
	onFocus?: () => void
	value?: string | boolean
	placeholder?: string
	type?: string
	helperText?: string
	error?: boolean
	pending?: boolean
	icon?: JSX.Element
	style?: CSSProperties
	className?: string
	reverseColor?: boolean
}
