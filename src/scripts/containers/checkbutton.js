/**
 * Created by lyi on 12/5/2016.
 */
import React, { Component } from 'react'
import {Button, ButtonToolbar, Panel, Checkbox, Radio, FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'


class CheckButton extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <ButtonToolbar>
                <Button bsStyle="primary">Check</Button>
            </ButtonToolbar>
        )
    }
}


function mapStateToProps(appState){
    return {checkbutton: appState.checkbutton}
}

export default connect(mapStateToProps)(CheckButton)
