import React, { Component } from 'react'
import {Button, ButtonToolbar, Panel, Checkbox, Radio, FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'


class Result extends Component {

    constructor(props){
        super(props)
    }

    render() {
       return (
               <Panel header="Result">
                   Result
               </Panel>
        )
    }
}


function mapStateToProps(appState){
    return {result: appState.result}
}

export default connect(mapStateToProps)(Result)
