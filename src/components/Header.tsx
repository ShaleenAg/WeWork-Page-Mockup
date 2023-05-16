/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import classes from '@/styles/Header.module.css'
import clsx from 'clsx'
import SearchIcon from '@mui/icons-material/Search';
import { Icon, Badge, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import MenuModal from './MenuModal';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <>
            <div className={classes.headerRoot}>
                <div className={classes.logo}>
                    <img src={'/logo.png'} alt='logo' /> <span>{">"}</span>
                </div>
                <div className={classes.icons}>
                    <SearchIcon />
                    <Icon>
                        <img src='/mail.svg' alt="icon" className={classes.icon} />
                    </Icon>
                    <Badge badgeContent={25} color='error'>
                        <Icon>
                            <img src='/not_bell.svg' alt="icon" className={classes.icon} />
                        </Icon>
                    </Badge>
                    <Icon>
                        <img src='/question.svg' alt="icon" className={classes.icon} />
                    </Icon>
                    <img src='/profile.png' alt="icon" height={45} width={45} />

                </div>
                <IconButton onClick={() => setOpenMenu(true)} className={classes.modalButton}>
                    <MenuIcon />
                </IconButton>
                {openMenu && <MenuModal open={openMenu} onClose={() => setOpenMenu(false)} />}
            </div>
        </>)
}

export default Header