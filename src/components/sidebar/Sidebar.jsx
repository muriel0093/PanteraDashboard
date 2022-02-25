import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './sidebar.css'

import logo from '../../assets/images/panteraNovo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const SidebarItem = props => {

    const [click, setClick] = useState(false);

    const active = props.active ? 'active' : ''

    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                {props.title}
                </span>
            </div>
            <ul>
                 {
                    props.options.map((item, index) => (
                    <li key={index} className='sub_title'>
                       {item}
                    </li>
                ))
                } 
            </ul> 
        </div>
    )
}

const Sidebar = props => {

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                            options={item.options}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar 