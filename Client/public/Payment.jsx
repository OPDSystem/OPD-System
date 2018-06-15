'use strict';

import React, {Component} from 'react';

export default class Payment extends Component {

    constructor(props) {
        super(props);
        this.months =new Date().getMonth();
        if(this.months=0)
        {
            this.month="Jan";
        }
        if(this.months=1)
        {
            this.month="Feb";
        }
        if(this.months=2)
        {
            this.month="Mar";
        }
        if(this.months=3)
        {
            this.month="Apr";
        }
        if(this.months=4)
        {
            this.month="May";
        }
        if(this.months=5)
        {
            this.month="Jun";
        }
        if(this.months=6)
        {
            this.month="Jul";
        }
        if(this.months=7)
        {
            this.month="Aug";
        }
        if(this.months=8)
        {
            this.month="Sep";
        }
        if(this.months=9)
        {
            this.month="Oct";
        }
        if(this.months=10)
        {
            this.month="Nov";
        }
        if(this.months=11)
        {
            this.month="Dec";
        }
        
        
    }

   



    render() {
        return   <div class="col-sm-10" >
                 <div class="row">
                 <div class="col-sm-3">
                    <div class="well dashboard_well" >
                        <h1>{new Date().getDate()}</h1>
                        <h1>{this.month}</h1>
                    </div>
                </div>
                
                 </div>
                
        </div>;
        
    }

}
