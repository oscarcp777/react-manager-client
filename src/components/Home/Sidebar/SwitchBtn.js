import React from 'react';
const SwitchBtn = props => {

    const iconLeft = 'fa fa-arrow-circle-o-left'
    const iconRight = 'fa fa-arrow-circle-o-right'

    const switchMenu = (event) => {
        event.preventDefault();
        document.body.classList.toggle('sidebar-compact');
        if (event.target.className === 'swich-btn') {
            event.target.children[0].className = event.target.children[0].className === `${iconLeft}`
                ? `${iconRight}`
                : `${iconLeft}`;
        } else {
            event.target.className = event.target.className === `${iconLeft}`
                ? `${iconRight}`
                : `${iconLeft}`;
        }
    };

    return (
        <a href="#" className="swich-btn" onClick={switchMenu}>
            <i className={iconLeft}></i>
        </a>
    );
};
export default SwitchBtn;
