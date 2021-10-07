import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

// Cool trick to save lines by importing components from an index of components
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'

const app = () => {
    return (
        <div>
            <div className="app">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            {/* Allows multiple routes */}
                            <Switch>
                                <Route exact path="/">
                                    <Homepage />
                                </Route>

                                <Route exact path="/exchanges">
                                    <Exchanges />
                                </Route>

                                <Route exact path="/cryptocurrencies">
                                    <Cryptocurrencies />
                                </Route>

                                <Route exact path="/crypto/:coinId">
                                    <CryptoDetails />
                                </Route>
                                
                                <Route exact path="/news">
                                    <News />
                                </Route>
                            </Switch>
                        </div>
                    </Layout>
                </div>
                <div className="footer">

                </div>
            </div>
        </div>
    )
}

export default app
