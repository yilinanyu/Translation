import React, { Component } from 'react'
import { connect } from 'react-redux'


class Header extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const data = this.props.header
       return (
           <header className="header">
               <img className="logo" src={data.imgSrc} />
               <h6>{data.title}</h6>

           </header>
        )
    }
}


function mapStateToProps(appState){
    return {header: appState.header}
}

export default connect(mapStateToProps)(Header)
