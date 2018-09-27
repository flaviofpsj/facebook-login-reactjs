import React, { Component } from 'react';

import Facebook from './Facebook';

class Content extends Component {
    render() {
        return (
            <div className='d-flex align-items-center justify-content-center team-boxed'>
                <Facebook />
            </div>
        );
    }
}

export default Content;
