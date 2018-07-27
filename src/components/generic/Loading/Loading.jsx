import React from 'react'
import './Loading.css'

export default class Input extends React.Component {


    getClasses() {
        const showLoaderClass = this.props.showLoader ? 'show-loader' : 'hide-loader'
        return `loading ${showLoaderClass}`
    }
    render() {
        return (
            <div className={this.getClasses()}>
                <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
                    <circle id="loading-inner" cx="75" cy="75" r="60" />
                </svg>
            </div>
        );
    }
}
