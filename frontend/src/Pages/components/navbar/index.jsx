import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import './style.css'; 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="fullscreen">
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Social Media App
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          
          <Stack direction="row" spacing={1}>
            <Tooltip title="Create" style={{ marginRight: '10px' ,marginLeft: '10px'}}>
              <IconButton color="inherit" >
              <CreateIcon />
                Create
                
              </IconButton>
            </Tooltip>
            
          </Stack>

          <Tooltip title="Profile">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAhFBMVEUIZf////8AY/////0AZ//k7v4LX/73+fwAXP8AYf9DeP++z/4AWf8AXv9He//4/P2MqP4AVf/x9/0wcP4AUv+Cpf1tlv5Ph/05fP0TbP3A0/uJrP7V4vyzxv0ndP7f6fyauPzQ3f6YtP1SgP+mwP1wmfxlkf+0y/5Tg/1cjP7q8v18of7LXmzVAAAIDUlEQVR4nM2c63aqOhCAI9GYYJADeAFBUUu99f3f7wRrLSiByQS69uy/e8nXyWQyt4SMLISGebbZHperdbyLkiTaxevV8rjdZHlIbX6XYHlouDmuPiJHSu4x4ZC7OIJ5XEon+lgdN3gwDBSl+WyZLAIufmBexRGCB4vk65xTikAzhVIfmRTriHPRjFMTLqN1MTHnMoNSRNt1IHUKalKZXFyK3JDKCIpmnzvJoEA/wmS0OhhhwaFoeI4DD6yjmr5YEG9vA0BNC9czVtKvCL4rwp6hpkUUoJRUUVeQFNP+oCjdxAyy27q05bkz0E7shqI0WwU9IN2xFqcMQNUJRf0jsbClV2FO2m1aHVCUHuayP6RS5PzQtYYdUP2q6VsESaftVO1Qk1PQN1IpwTVHQ9HN2BuCqbSsWZuu9FCUHh1L19QiXtpiWFooGn72bOF14St9vKWDov6FD8mkqD58HZUGiubuQOb0K8zVOdJGKDqaRL17ggaqaNJM1ayp7C+YlMdKmuOsJih6+xsmpaukUVcNUDT/K6ZSV0129Q5F/fmfMZXW3hBjvUHR8DL4vqtRxe/+6h3K3mcKwRh/CmMqPWw5GviqE4oe7Zg8GYznKnlP9/tCyf6Yfp2u84gFUpsp8vSV6hVqY3HcCS7ZaX/Ib9PKuUaVQdwm2aH4ipjGVvmsHWoyRkNxb33MXheitgj+p8ZanZdstQ7ln7Abz5NfWWec+5/mOGXr+hasQdEjMqbzxult1J0R6KBIUDerKhQ94JAcvspBqZMWijgHDZTymqhMiiVbYF1FDyV2VW9VhUJ5gzFzNWe9CRSRaSMUzRBI6teu4BJBGxQRlYChArXC7DxmwNQKxa5+A9QGs/NEbMDUCkWCXxf6hEJZuUgmBkztUMJ9/n1PqC1m8byzUYWuFYp4xSvUNEIoyvs0K2a2Q4nkxy08oGixMGdyxkaL1wVFgn1dU6GLOIi9vWHVtwPK2d1qUGdMtDk22XkAKMILWoGiMcLMZWrI1Akl3IqmaIbxUZ5pzb4TigTfbv0bShd9tQlb+e0ICCh2ekLRSYQwc150ICCgSHTX/h2qwIQHDswffLeL6F26oeT+CXVBmLnYdVlUiRFmM5XRHMvUZjvLvjqthMU/UBOMmfOOvVc2vE5ysQjkjwQLgOUG5foR7OotXvOiFwnTSDJzU+X7B9Qacew5vLXASzdEopI1cfHvUDlm7wm3rVVGZw62cZJkd6gZprjJri0dKZrh6zZyW0LRJQrqq2Xz+Ws8FFfhkIJKMJpmx5bVm1n0KRxRQoWISKoaJjasHmbnPGVxU1CohIGwsx4qTyyYSHBWUEdUEZ9t9FBbq1Kg8sqErnC5+kEPhfszf0ScKAk/cFD6UhQqEPoVZx4SlOtshfIvdh3nJCcZrnTH9KcMKluriDiQDa7wyvTR1BRforxLsCHbfw5KFgS5VQaE4ilZ4rbKgFDsk6CqUoNCiStBnlMDQjkxiZEuYTgoslP//jmohETQ/+pURXgtUEQ4jQL90piAwwy3Li1QrkbG0E9BoRx3Uhctk8ojmyWH18CA57GYG5czXgUc+42hht4D1IYANZVAXYI9FC2gB9oO6jx7gIKmcsp5Ao+ZHqCgJUyxhh7I9lAh1KTUgQwMXeyhcmh+6aXQIM8e6gzNL1WQBwyH7aG6a4sPUeFwBjuTrKHgubxKHIApljUUvNGiUixgMmoNlUEPGTG/QdN2a6gNNBco03Zg5m8NtYfaeVngAJaCrKG6a+gPCc4UWjSzhKLUhW6+e9GMgizQFmoKral/lxdHX5DVtl0+8CFTDp4pqDPEp9tqCn7IbOHFfVtNgevij+I+6AAQc6vLcfQKDaYebRBQw8jZzeqibWpTOnuX7Q5o58+G0QRkhLwmQUve50n+JjAk5RDKsiW2CTlQ2i5im3btQFCVdi2iQjwQVPJsbGPmuYaBqowAYIYlhoGqDkuonMy0njcIlNh9/8JjAMe4xzMI1M/8xQPqZjqqNASUE92qU0GjUWFoVUNABcf6pNkoNGzaDgDlPOexnoOChZlVDQDFn4NrT6gQHK8OBCV27yOVo5lRg7t/qMVvV7oy0Gw0IN87FFs3jemOjAaae4dqHmg2G/3uG4r/1zyPPpoajA/3DCUizZD8aGRwnaBnKKc25lC/eJGC/Xq/UMFSe/FiRH1o0tEvFLu0XFFROSC4hNsr1Mt9urdrT0BV9QnVde1JmRXML/QIJZeveW7DVTpQjtYfFD8B7veFH5AV7A2KxbduKLUFXQBVX1Asari43XSRNQNM0PQEJcaHhl9ovPI76Q5D+4Fi48aZ9uYb24dOql6gxHgDvhx9n1DvsKs+oDR60l+4zzqsvQcoFuke69E+TTCNW/2VPRSfa+tuLY84rNp8uzWUPL37p06oEaVp2803Syi+xDx3UWLNhNaw7KAYQz4MUkp+1UV9VlDBuvXCcgcUnaaax2YsoISztHpspnyWx220dzwUj5o9Jhyq/EbaZFlYKOYsrR8wGt2VdV28nTo4KCdYHwA3u0GPYvkz13vBwkA5fHfWvuViCqUkLJL682HmUE4w3gMfW4M/tLZ3q88wmEIJvtuD3z00eCfvVrjBs79pBsWCXaE/VWygSpNfRY/H+wyghExOyrwNWnOmzxzmRRyUyyiAUIIv4j3s4QIs1P1+XL6/JFICoBwuk4sxEQLqDuZn2892KKd8OtP73Gb+Xzyd+QTTf2sqvWR+Ss83DM9dsFAt4s8OucFWa5D/AQ1nhZzKCzP8AAAAAElFTkSuQmCC" alt="Profile" className="profile-icon immg" />
            </IconButton>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
