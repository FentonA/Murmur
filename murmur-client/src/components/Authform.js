import React, {Component} from "react";
import PropTypes from 'prop-types';

class Authform extends Component{
	constructor(props){
		super(props);
		this.state ={
			email:"",
			username:"",
			password:"",
			profileImageUrl:""
		};
	}

  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

	render(){
		const {email, username, password, profileImageUrl} = this.state;
		const {signUp,heading, buttonText, history, removeError, errors} = this.props;

		history.listen(()=>{
			removeError();
		});
			return(
				<div>
					<div className ="row justify-content-md-center text-center">
						<div className ="col-md-6">
							<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message &&(
							 <div className="alert alert-danger">{errors.message}</div>
							 )}
							<label htmlFor="email">Email:</label>
							<input 
							className="form-control"
							 id="email"
							 name="email"
							  onChange={this.handleChange}
							   value={email}
							    type="text"
							    />

							 <label htmlFor="password">password:</label>
							<input 
							className="form-control"
							 id="password"
							 name="password"
							  onChange={this.handleChange}
							    type="password"
							    value ={password}
							    />
							    {signUp && (
							    	<div>
										  <label htmlFor="username">Username:</label>
										<input 
										className="form-control"
										 id="username"
										 name="username"
										  onChange={this.handleChange}
										   value={username}
										    type="text"
										    />

										 <label htmlFor="image-url">Image URL</label>
										<input 
										className="form-control"
										 id="image-url"
										 name="profileImageUrl"
										  onChange={this.handleChange}
										    type="text"
										    value ={profileImageUrl}
										    />
							    	</div>
							    	)}
							    <button className="btn btn-primary btn-block btn-lg">
							    	{buttonText}
							    </button>
							</form>
						</div>
					</div>
					</div>
				);
		}

	}

	Authform.propTypes ={
		buttoinText: PropTypes.string,
		errors: PropTypes.object,
		heading: PropTypes.string,
		histroy: PropTypes.object,
		onAuth: PropTypes.func,
		signIn: PropTypes.bool,
		removeError: PropTypes.func
	};

	export default Authform;