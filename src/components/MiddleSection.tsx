import React from 'react'
import LeftSideMenu from './LeftSideMenu'
import MainContent from './MainContent'
import RightSideCart from './RightSideCart'

import './MiddleSection.css';

function MiddleSection() {
    return (
        <div className="middle-section">
            <LeftSideMenu />
            <MainContent />
            <RightSideCart />
        </div>
    )
}

export default MiddleSection;
