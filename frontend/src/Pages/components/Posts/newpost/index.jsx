import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './style.css'; // Assuming you have a style.css file for custom styles
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Newpost() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '80%' }} className='card'>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Write what you want"
            style={{ width: '95%' , padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </CardContent>
        <CardActions disableSpacing  sx={{ justifyContent: 'flex-end' }}>
        <Button variant="contained" endIcon={<ScreenShareOutlinedIcon />}>
            Post It
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}