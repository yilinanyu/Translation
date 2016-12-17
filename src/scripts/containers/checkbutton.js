/**
 * Created by lyi on 12/5/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { checkTranslation } from '../actions/index'



class CheckButton extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.checkTranslation} Style="primary">Check</button>
            </div>
        )
    }
}


function mapStateToProps(appState){
    return {checkbutton: appState.checkbutton}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({checkTranslation}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckButton)
