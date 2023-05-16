import { useState } from 'react'
import clsx from 'clsx'
import { Backdrop, Dialog, IconButton, Icon, Badge, Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search'

import classes from '@/styles/Header.module.css'
interface MenuModalProps {
    open: boolean;
    onClose: () => void
}

const MenuModal = ({ open, onClose }: MenuModalProps) => {
    return (
        <Dialog open={open} onClose={onClose} fullScreen={true} className={classes.modalRoot} color='primary.main'>
            <div className={classes.modalContent}>
                <IconButton onClick={() => onClose()} sx={{ alignSelf: 'flex-end' }}>
                    <CloseIcon />
                </IconButton>
                <div className={classes.modalProfileInfo}>
                    <img src='/profile.png' alt="profile" />
                    <div className={classes.profileInfo}>
                        <span>Jane Smith</span>
                        <span>Sales Executive</span>
                    </div>

                </div>
                <Divider variant='middle' flexItem />

                <div className={classes.modalIcons}>
                    <div className={classes.modalIcon}>
                        <SearchIcon />
                        <span>Search</span>
                    </div>
                    <Divider variant='middle' flexItem />

                    <div className={classes.modalIcon}>
                        <Icon>
                            <img src='/mail.svg' alt="icon" className={classes.icon} />
                        </Icon>
                        <span>Inbox</span>
                    </div>
                    <Divider variant='middle' flexItem />

                    <div className={classes.modalIcon}>
                        <Badge badgeContent={25} color='error'>
                            <Icon>
                                <img src='/not_bell.svg' alt="icon" className={classes.icon} />
                            </Icon>
                        </Badge>
                        <span>Notifications</span>
                    </div>
                    <Divider variant='middle' flexItem />

                    <div className={classes.modalIcon}>
                        <Icon>
                            <img src='/question.svg' alt="icon" className={classes.icon} />
                        </Icon>
                        <span>Help</span>
                    </div>

                </div>
            </div>

        </Dialog>
    )
}

export default MenuModal