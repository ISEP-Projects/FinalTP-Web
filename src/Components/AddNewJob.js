import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Modal, Form } from 'react-bootstrap'
import { createJob, addJob } from '../actions'

export const AddNewJob = ({ show, handleClose, addNewJobForm, temp }) => {
	console.log('JKSDFJL')
	console.log(temp)
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

		dispatch(addJob(fixer, title, description, henchmenCount, reward))

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
							isInvalid={addNewJobForm.errors.fixer.length > 0}
							isValid={
								addNewJobForm.values.fixer &&
								addNewJobForm.errors.fixer.length === 0
							}
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
							onChange={handleChange}
							required
						/>
						<Form.Label>Reward</Form.Label>
						<Form.Control name='reward' type='number' onChange={handleChange} />
					</Form.Group>
					<Button type='submit' value='submit' color='primary'>
						Add
					</Button>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

AddNewJob.propTypes = {
	addNewJobForm: PropTypes.shape({
		values: PropTypes.shape({
			fixer: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			henchmenCount: PropTypes.number,
			reward: PropTypes.number,
		}),
		errors: PropTypes.shape({
			fixer: PropTypes.string,
			title: PropTypes.string,
			description: PropTypes.string,
			henchmenCount: PropTypes.string,
			reward: PropTypes.string,
		}),
	}),
}

const mapStateToProps = (state) => ({
	addNewJobForm: state.forms.addNewJobForm,
	temp: state.forms,
})

export default connect(mapStateToProps)(AddNewJob)
