import React from 'react'
import { withStyles } from 'react-with-styles'

import TopNavBar from '../TopNavBar/TopNavBar'
import MainView from '../MainVIew/MainView'
import SideNavBar from '../SideNavBar/SideNavBar'
import { classes } from 'istanbul-lib-coverage';

const style = theme => ({
    applayout: {
        margin: '0 !important',
        padding: '0 !important',
        boxSizing: 'border-box',
        color: 'red',
        // fontFamily: ''
    }
})


class Applayout extends React.Component {
    render() {
        const {applayout} = this.props
        return (
            <div className={classes.applayout}>
                This is App Layout
                <TopNavBar />
                <MainView />
                <SideNavBar />

            </div>
        )
    }
}

export default withStyles(style)(Applayout)