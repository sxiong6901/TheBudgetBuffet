import React from 'react'
import API from '../utils/API'
import cooking from '../images/cookingbackground.jpg'
import './LogIn.css'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}		
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		API.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/home')				
			} 
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div styles={{backgroundImage:`url(${cooking})`}}>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1 style={{textAlign: "center"}}>Log In</h1>
						<form  onSubmit={this.onFormSubmit.bind(this)}>
							<input 
								type="text" 
								placeholder="Email" 
								name="email" 
								value={email} 
								onChange={this.onInputChange.bind(this)}
							/>
							<input 
								type="password" 
								placeholder="Password" 
								name="password" 
								value={password} 
								onChange={this.onInputChange.bind(this)}
							/>
							<button>Log In</button>
						</form>
						
					</div>
				</div>
			</div>
			</div>
		)
	}
}

export default LogIn