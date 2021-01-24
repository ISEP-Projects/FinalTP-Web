import React from 'react'
import { render } from '@testing-library/react'
import { Loading } from '../Components/Loading'
import Home from '../Components/Home'
import { SetToast } from '../Components/SetToast'

describe('compontens tests', () => {
	describe('renders correctly', () => {
		it('Loading', () => {
			const { queryByTestId } = render(<Loading />)
			expect(queryByTestId('loading')).toBeInTheDocument()
		})

		it('Home', () => {
			const { queryByTestId } = render(<Home />)
			expect(queryByTestId('home')).toBeInTheDocument()
		})

		it('SetToast', () => {
			const { queryByTestId } = render(<SetToast />)
			expect(queryByTestId('toast')).toBeInTheDocument()
		})
	})
})
