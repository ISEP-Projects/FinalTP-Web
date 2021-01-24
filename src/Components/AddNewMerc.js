import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, Form } from 'react-bootstrap'
import { createMerc } from '../actions'

export const AddNewMerc = ({ show, handleClose }) => {
	const initialFormData = Object.freeze({
		nickname: '',
		legalAge: '',
	})
	const [formData, setFormData] = useState(initialFormData)
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		})
	}

	const dispatch = useDispatch()

	const handleSubmitNewMerc = (e) => {
		e.preventDefault()
		const nickname = formData.nickname
		const legalAge = formData.legalAge
		dispatch(createMerc(nickname, legalAge))
		handleClose()
	}
	return (
		<Modal show={show} onHide={handleClose} animation={false}>
			<Modal.Header closeButton>
				<Modal.Title>Add a merc</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmitNewMerc}>
					<Form.Group>
						<Form.Control
							name='nickname'
							placeholder='Nick Name'
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							name='legalAge'
							placeholder='Age'
							onChange={handleChange}
							type="number"
							required
						/>
					</Form.Group>
					<Button type='submit' value='submit' color='primary'>
						Submit
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}
