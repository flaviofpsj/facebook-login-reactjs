import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            userID: '',
            name: '',
            email: '',
            picture: '',
        }
    }

    responseFacebook = response => {
        //console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url,
        })
    }

    componentClicked = () => console.log('Clicked');

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            //fbContent = null;

            fbContent = (
                <div className='container'>
                    <div className='row people'>
                        <div className='col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 align-self-center mx-auto item'>
                            <div className='box'><img className='rounded-circle' src={this.state.picture} alt={this.state.name} />
                                <h3 className='name'>{this.state.name}</h3>
                                <p className='title'>{this.state.email}</p>
                                <div className='social'><a href=''><i className='fa fa-facebook'></i></a><a href=''><i className='fa fa-twitter'></i></a><a href=''><i className='fa fa-instagram'></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        
        else {
            fbContent = (
                <FacebookLogin
                    appId="685570855141847"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            )
        }

        return (
            fbContent
        );
    }
}

export default Facebook;
