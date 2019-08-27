import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';

import AddPortfolioModal from '../Forms/AddPortfolioModal';
import DeletePortfolioModal from '../Forms/DeletePortfolioModal';
// import AddCoinModal from '../Forms/AddCoinModal';


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: 'green',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: 'green',
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                style={{ background: '#00C689' }}
                variant="contained"
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemIcon>
                        <AddPortfolioModal />
                    </ListItemIcon>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <DeletePortfolioModal />
                    </ListItemIcon>
                </StyledMenuItem>
                {/* <StyledMenuItem>
                    <ListItemIcon>
                        <AddCoinModal />
                    </ListItemIcon>
                </StyledMenuItem> */}
            </StyledMenu>
        </div>
    );
}
