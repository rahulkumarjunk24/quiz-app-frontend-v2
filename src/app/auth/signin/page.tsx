import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import LeftPoster from './components/LeftPoster';
import SigninForm from './components/SigninForm';
import SigninFormHeader from './components/SigninFormHeader';

export default function Signin() {
	return (
		<Grid container component='main' sx={{ height: '100vh' }}>
			<CssBaseline />
			<LeftPoster />
			<Grid
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={6}
				square
			>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<SigninFormHeader />
					<SigninForm />
				</Box>
			</Grid>
		</Grid>
	);
}
