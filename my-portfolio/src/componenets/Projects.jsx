// Projects.js 
import React from 'react'; 
import { FontAwesomeIcon } 
	from '@fortawesome/react-fontawesome'; 
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
import Breadcrumbs from './Breadcrumbs'; 
import { Link } from 'react-router-dom';
import './style.css'; 

const Projects = () => { 
	const breadcrumbsPaths = 
		[ 
			{ title: 'Home', to: '/' }, 
			{ title: 'Projects', to: '/projects' } 
		]; 

	return ( 
		<section id="projects"
			className="container text-center"> 
			<Breadcrumbs paths={breadcrumbsPaths} /> 
			<h2 className="section-title"> 
				<FontAwesomeIcon icon={faCode} 
					className="mr-2" /> 
				Projects 
			</h2> 
			<div className="row"> 
				{/* Project 1 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>DOCTOR-HELP APPLICATION </b>
							</h5> 
							
							<p className="card-text"> 
								This App was developed using <b>Ruby on Rails</b> with <b>PostgreSQL</b> based on a job assessment requirements 
								to build a simple Rails application that consists of a receptionist portal and a doctor portal, 
								with a single login page for both portals, receptionists can register a new patient and perform 
								<b> CRUD</b> operations, while Doctors can view registered patients and view the graph that represents 
								the number of patients registered v.s days.  							
							</p> 
							<p className="card-text">
							<Link as={Link} to="https://drive.google.com/file/d/1N6CmVZ-sjoQuwvYQZC4nJhBT6UVRuMvf/view" target="_blank">
							<span className="project-link">DOCTOR-HELP</span>
							</Link>
							</p>
							<p>
							<Link as={Link} to="https://github.com/mayalinux2024/doctor-help" target="_blank">
							<span className="project-link">Github</span>
							</Link>
							</p>
						</div> 
					</div> 
				</div> 
				{/* Project 2 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>DEVABOLLATORS </b>
							</h5> 
							<p className="card-text"> 
								Built upon an open-source project and developed using 
								Next.js, React.js, HTML, CSS, JavaScript, and node.js. 
								The online learning rooms were tailored to include <b>Teams </b>
								to study together from some basic prescribed <b>easy steps</b>.
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://devs-editors-qpcc.vercel.app/'>DEVABOLLATORS</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/devs_editors" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div> 
				{/* Project 3 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>Accordion Menu </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-accordian.vercel.app/'>ACCORDION</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-accordian" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div> 
				{/* Project 4 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>Task Scheduler </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-task-scheduler.vercel.app/'>Task Scheduler</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-task-scheduler" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div> 
				{/* Project 5 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>Blog App </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-blog-app-drab.vercel.app/'>Blog app</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-blog-app" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div>
				{/* Project 6 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>Nutrition meter App </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-nutrition-meter.vercel.app/'>Nutrition meter</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-nutrition-meter" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div>
				{/* Project 7 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>React.JS Form </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-form-gamma.vercel.app/'>React-JS Form </a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-form" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div>
				{/* Project 8 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>Password Validator </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-password-validator.vercel.app/'>Password Validator</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-password-validator" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div>
				{/* Project 9 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>A To-Do List </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-todo-delta.vercel.app/'>To Do List</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-todo" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div>
				{/* Project 10 */} 
				<div className="col-md-6"> 
					<div className="card mb-4"> 
						<div className="card-body"> 
							<h5 className="card-title"> 
								<b>Progress Tracker </b>
							</h5> 
							<p className="card-text"> 
								This is a training project for React.js skills. 
							</p>
							<p className="card-text">
							<a className="project-link" target="_blank" href='https://react-js-progress-tracker.vercel.app/'>Progress Tracker</a>
							</p> 
							<Link as={Link} to="https://github.com/maya88en/react-js-progress-tracker" target="_blank">
							<span className="project-link">Github</span>
							</Link>
						</div> 
					</div> 
				</div>
			</div> 
		</section> 
	); 
}; 

export default Projects;