import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Modal, Form } from 'react-bootstrap'
import { createJob } from '../actions'

export const AddNewJob = ({ show, handleClose }) => {

	const initialFormData = Object.freeze({
		fixer: '',
		title: '',
		description: '',
		henchmenCount: 0,
		reward: 0,
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
		const fixer = formData.fixer
		const title = formData.title
		const description = formData.description
		const henchmenCount = formData.henchmenCount
		const reward = formData.reward

		dispatch(createJob(fixer, title, description, henchmenCount, reward))

		handleClose()
	}
	return (
		<Modal show={show} onHide={handleClose} animation={false}>
			<Modal.Header closeButton>
				<Modal.Title>Add a job</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Fixer</Form.Label>
						<Form.Control
							name='fixer'
							placeholder='Fixer'
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control
							name='title'
							placeholder='Title'
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as='textarea'
							name='description'
							placeholder='Tell me about this job'
							onChange={handleChange}
							required
						/>
					</Form.Group>{' '}
					<Form.Group>
						<Form.Label>Henchmen Count</Form.Label>
						<Form.Control
							name='henchmenCount'
							type='number'
							min={0}
							onChange={handleChange}
							required
						/>
						<Form.Label>Reward</Form.Label>
						<Form.Control
							name='reward'
							type='number'
							min={1}
							onChange={handleChange}
						/>
					</Form.Group>
					<Button type='submit' value='submit' color='primary'>
						Add
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}
