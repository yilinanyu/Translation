import React, { Component } from 'react'
import {Button, ButtonToolbar, Panel, Checkbox, Radio, FormGroup} from 'react-bootstrap'
import { connect } from 'react-redux'


class Marketingpage extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <Panel header="Marketing Pages">
                <FormGroup groupClassName="col-sm-2">
                    <Checkbox inline>
                        Home
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Model S
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Model X
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Model 3
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Energy
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Powerwall
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Charging
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Updates
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Support
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Career
                    </Checkbox>
                    {' '}
                    <Checkbox inline>
                        Software
                    </Checkbox>
                    {' '}
                </FormGroup>
            </Panel>
        )
    }
}


function mapStateToProps(appState){
    return {marketingpage: appState.marketingpage}
}

export default connect(mapStateToProps)(Marketingpage)
