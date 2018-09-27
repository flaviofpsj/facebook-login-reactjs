import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className='d-flex align-items-center team-boxed'>
                <div className='container'>
                    <div className='row people'>
                        <div className='col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3 align-self-center mx-auto item'>
                            <div className='box'><img className='rounded-circle' src={this.props.picture} alt={this.props.name} />
                                <h3 className='name'>{this.props.name}</h3>
                                <p className='title'>{this.props.email}</p>
                                <div className='social'><a href=''><i className='fa fa-facebook'></i></a><a href=''><i className='fa fa-twitter'></i></a><a href=''><i className='fa fa-instagram'></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
