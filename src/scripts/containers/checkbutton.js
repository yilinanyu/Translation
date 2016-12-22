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
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.props.checkTranslation(ajaxcall = 1)}>
                    Check
                </button>
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
