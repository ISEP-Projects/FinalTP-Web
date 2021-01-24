import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = () => {
	return (
		<div className="col-12">
			<Spinner animation="border" role="status">
				<span className="sr-only" data-testid="loading">
					Loading...
				</span>
			</Spinner>
		</div>
	)
}
