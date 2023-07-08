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
import Link from '@mui/material/Link';
import { ScrollContext } from '@/ScrollContext';
import { useContext } from 'react';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import MoodBadIcon from '@mui/icons-material/MoodBad';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const scrollContext = useContext(ScrollContext);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (sectionId: string) => {
    if (scrollContext) {
      scrollContext.scrollToSection(sectionId, 80, 100);
    }
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
        className="menu "
      >
        <MenuItem
          sx={{
            fontFamily: 'Rubik, sans-serif',
            backgroundColor: '#211f20',
            color: 'white',
            transition: 'all 2s ease-in-out',

            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          <Link
            color="inherit"
            underline="none"
            onClick={() => handleLinkClick('Trending')}
            href="#Trending"
            sx={{
              width: '100%',
            }}
          >
            Trending
          </Link>
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
            backgroundColor: '#211f20',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          <Link
            color="inherit"
            underline="none"
            onClick={() => handleLinkClick('Top')}
            href="#Top"
            sx={{
              width: '100%',
            }}
          >
            Top Loved
          </Link>
          <VolunteerActivismIcon
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
            backgroundColor: '#211f20',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          <Link
            color="inherit"
            underline="none"
            onClick={() => handleLinkClick('Action')}
            href="#Action"
            sx={{
              width: '100%',
            }}
          >
            Action
          </Link>
          <SportsKabaddiIcon
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
            backgroundColor: '#211f20',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          <Link
            color="inherit"
            underline="none"
            onClick={() => handleLinkClick('Scary')}
            href="#Scary"
            sx={{
              width: '100%',
            }}
          >
            Horror
          </Link>
          <MoodBadIcon
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
            backgroundColor: '#211f20',
            color: 'white',
            transition: 'all 2s ease-in-out',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          onClick={handleClose}
        >
          <Link
            color="inherit"
            underline="none"
            onClick={() => handleLinkClick('myList')}
            href="#myList"
            sx={{
              width: '100%',
            }}
          >
            My List
          </Link>
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
