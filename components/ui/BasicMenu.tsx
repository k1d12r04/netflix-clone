import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Divider } from '@mui/material';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'white',
          opacity: 0.9,
          fontFamily: 'Rubik, sans-serif',
        }}
        className="md:!hidden"
      >
        Browse
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className="menu"
      >
        <MenuItem
          sx={{
            fontFamily: 'Rubik, sans-serif',
            backgroundColor: 'black',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          Home{' '}
          <HomeRoundedIcon
            sx={{
              fontFamily: 'Rubik, sans-serif',
              marginLeft: 'auto',
            }}
          />
        </MenuItem>
        <Divider
          variant="middle"
          sx={{
            height: '1.5px !important',
            margin: '0 !important',
            backgroundColor: 'gray !important',
          }}
        />
        <MenuItem
          sx={{
            fontFamily: 'Rubik, sans-serif',
            backgroundColor: 'black',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          TV Shows
          <TvIcon
            sx={{
              fontFamily: 'Rubik, sans-serif',
              marginLeft: 'auto',
            }}
          />
        </MenuItem>
        <Divider
          variant="middle"
          sx={{
            height: '1.5px !important',
            margin: '0 !important',
            backgroundColor: 'gray !important',
          }}
        />
        <MenuItem
          sx={{
            fontFamily: 'Rubik, sans-serif',
            backgroundColor: 'black',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          Movies
          <MovieIcon
            sx={{
              fontFamily: 'Rubik, sans-serif',
              marginLeft: 'auto',
            }}
          />
        </MenuItem>
        <Divider
          variant="middle"
          sx={{
            height: '1.5px !important',
            margin: '0 !important',
            backgroundColor: 'gray !important',
          }}
        />
        <MenuItem
          sx={{
            fontFamily: 'Rubik, sans-serif',
            backgroundColor: 'black',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          New & Popular
          <TrendingUpIcon
            sx={{
              fontFamily: 'Rubik, sans-serif',
              marginLeft: 'auto',
            }}
          />
        </MenuItem>
        <Divider
          variant="middle"
          sx={{
            height: '1.5px !important',
            margin: '0 !important',
            backgroundColor: 'gray !important',
          }}
        />
        <MenuItem
          sx={{
            fontFamily: 'Rubik, sans-serif',
            backgroundColor: 'black',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          My List
          <FavoriteIcon
            sx={{
              fontFamily: 'Rubik, sans-serif',
              marginLeft: 'auto',
            }}
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
