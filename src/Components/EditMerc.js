import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

export const EditMerc = ({ merc, show, handleClose, weapon }) => {
	const initialFormData = Object.freeze({
		nickname: merc.nickname,
		legalAge: merc.legalAge,
	})

	const [formData, setFormData] = useState(initialFormData)
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formData)
		//... submit to API
	}
	return (
		<Modal show={show} onHide={handleClose} animation={false}>
			<Modal.Header closeButton>
				<Modal.Title>Edit a merc</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Nick Name</Form.Label>
						<Form.Control
							name='nickname'
							placeholder={merc.nickname}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Age</Form.Label>
						<Form.Control
							name='legalAge'
							placeholder={merc.legalAge}
							onChange={handleChange}
						/>
					</Form.Group>
					<Button type='submit' value='submit' color='primary'>
						Save
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
} 
