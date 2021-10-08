import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    const [activeMenu, setactiveMenu] = useState(true)
    const [secreenSize, setSecreenSize] = useState(null)

    useEffect(()=> {
        const handleResize = () => setSecreenSize(window.innerWidth)

        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize) 
    }, [])

    useEffect(() => {
        if(screenSize < 768){
            setactiveMenu = false
        }else{
            setactiveMenu = true
        }
    }, [secreenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoCave</Link>
                </Typography.Title>
                </div>
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>

                </Menu>
                {/* <Button className="menu-control-container">

                </Button> */}
        </div>
    )
}

export default Navbar
