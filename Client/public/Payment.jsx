'use strict';

import React, {Component} from 'react';

export default class Payment extends Component {

    constructor(props) {
        super(props);
        
    }

   



    render() {
        return   <div class="col-sm-10" id="contentView">
                 <div class="row">
                 <div class="col-sm-3">
                    <div class="well dashboard_well" >
                        <h1>{new Date().getDate()}</h1>
                        <h1>{new Date().getMonth() +1}</h1>
                    </div>
                </div>
                
                 </div>
        </div>;
        
    }

}
