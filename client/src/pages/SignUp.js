import React from 'react'
import API from '../utils/API'
import logo from '../images/doggo.gif'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: ''}
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
		API.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/home')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1 style={{textAlign: "center"}}>Sign Up</h1>
						<img src={logo}
						alt= "doggo"
						style={{height: "300px", alignContent: "center"}}></img>
						<form onSubmit={this.onFormSubmit.bind(this)}>
							<input 
								type="text" 
								placeholder="Name" 
								name="name" 
								value={name} 
								onChange={this.onInputChange.bind(this)}
							/>
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
							<button>Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp