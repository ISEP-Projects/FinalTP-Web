import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import { JobCard } from './JobCard'
import { AddNewJob } from './AddNewJob'
import { Loading } from './Loading'
import { SelectMerc } from './SelectMerc'
import { useParams } from 'react-router-dom'
import {
	deleteJob,
	getJobs,
	showAddJobForm,
	getJobDone,
	getMercs,
	setShowToast,
	getGuns
} from '../actions'

const Jobs = ({
	mercsList,
	jobsList,
	gunsList,
	isLoading,
	errMess,
	showForm,
	handleShowAddNewJob,
	handleCloseAddNewJob,
	handleGetMercs,
	handleGetJobs,
	handleGetGuns,
	handleDelete,
	handleGetJobDone,
	content,
	showToast,
	handleShowToast,
}) => {
	const [mercID, setMercID] = useState(0)
	const availableMercList = mercsList.filter((merc) => merc.isAlive)
	useEffect(() => {
		if (isLoading && jobsList.length === 0) {
			handleGetJobs()
		}
		if (isLoading && mercsList.length === 0) {
			handleGetMercs()
		}
		if (isLoading && gunsList.length === 0) {
			handleGetGuns()
		  }
	}, [handleGetJobs, handleGetMercs, handleGetGuns, isLoading, jobsList, mercsList, gunsList])

	const { mercId } = useParams()
	if (mercID === 0) {
		if (mercId !== undefined) {
			console.log('Setting merc Id to ' + mercId)
			setMercID(mercId)
		} else if (mercId === undefined && availableMercList.length !== 0) {
			console.log('Setting merc Id to ' + availableMercList[0].id)
			setMercID(availableMercList[0].id)
		}
	}

	const onChangeMerc = (e) => {
		setMercID(e.target.value)
	}

	const job = jobsList.map((job, index) => (
		<div key={index}>
			<Accordion defaultActiveKey='0'>
				<JobCard
					job={job}
					mercId={mercID}
					handleDelete={handleDelete}
					handleGetJobDone={handleGetJobDone}
					content={content}
					showToast={showToast}
					handleShowToast={handleShowToast}
				/>
			</Accordion>
		</div>
	))

	if (isLoading) {
		return (
			<Container className='Container'>
				<Row>
					<Loading />
				</Row>
			</Container>
		)
	} else if (errMess) {
		return (
			<Container className='Container'>
				<Row>
					<Col>
						<h4>{errMess}</h4>
					</Col>
				</Row>
			</Container>
		)
	} else {
		return (
			<>
				<Container className='Container'>
					<Row>
						<Col>
							<h1>Jobs</h1>
						</Col>
					</Row>
					<Row className='justify-content-md-center'>
						<Col xs='auto'>
							<SelectMerc
								mercID={mercID}
								mercsList={availableMercList}
								onChangeMerc={onChangeMerc}
							/>
						</Col>
					</Row>
					<Row className='justify-content-md-center'>{job}</Row>
					<Row className='justify-content-md-center'>
						<Button
							variant='dark'
							style={{ float: 'right', width: '50rem' }}
							onClick={handleShowAddNewJob}
						>
							Add a new job
						</Button>
					</Row>
				</Container>
				<AddNewJob show={showForm} handleClose={handleCloseAddNewJob} />
			</>
		)
	}
}

Jobs.propTypes = {
	jobsList: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => ({
	mercsList: state.mercs.mercs,
	jobsList: state.jobs.jobs,
	gunsList: state.guns.gunsList,
	isLoading: state.jobs.isLoading,
	errMess: state.jobs.errMess,
	showForm: state.jobs.showForm,
	content: state.toast.content,
	showToast: state.toast.show,
})

const mapDispatchToProps = (dispatch) => ({
	handleShowAddNewJob: () => dispatch(showAddJobForm(true)),
	handleCloseAddNewJob: () => dispatch(showAddJobForm(false)),
	handleGetMercs: () => dispatch(getMercs()),
	handleGetJobs: () => dispatch(getJobs()),
	handleDelete: (jobId) => dispatch(deleteJob(jobId)),
	handleGetJobDone: (mercID, jobId) => dispatch(getJobDone(mercID, jobId)),
	handleShowToast: (bool) => dispatch(setShowToast(bool)),
	handleGetGuns: () => dispatch(getGuns())
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
