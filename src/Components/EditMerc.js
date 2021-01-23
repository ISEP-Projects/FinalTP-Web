import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, Form } from 'react-bootstrap'
import { editMerc } from '../actions'

export const EditMerc = ({ merc, show, handleClose }) => {
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

	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()
		const nickname = formData.nickname
		const legalAge = formData.legalAge
		dispatch(editMerc(merc.id, nickname, legalAge))
		handleClose()
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
					<Button type='submit' value='submit' color='primary' >
						Save
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
} 
