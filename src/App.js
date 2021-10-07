import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

// Cool trick to save lines by importing components from an index of components
import { Navbar } from './components'
import './App.css'

const app = () => {
    return (
        <div>
            <div className="app">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">

                </div>
                <div className="footer">

                </div>
            </div>
        </div>
    )
}

export default app
