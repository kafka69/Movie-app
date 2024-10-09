import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStateMovie from '../hooks/useStateProvider';

const Login = () => {
    const {isLogin} = useStateMovie();
    const navigate = useNavigate();
    const handleLogin = ()=>{
      if(isLogin){
        navigate("/home")
      }else{
        navigate("/")
      }
    }
  return (
    <Box
      sx={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          marginBottom: '10vw',
          width: '100%',
          position: 'relative',
          minHeight: '100vh',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '80px 40px',
          height: '100%',
        }}
      >
        <Box sx={{ maxWidth: '650px', width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box
            component="img"
            src="/images/cta-logo-one.svg"
            alt=""
            sx={{
              marginBottom: '12px',
              maxWidth: '600px',
              minHeight: '1px',
              display: 'block',
              width: '100%',
            }}
          />
          <Button
          onClick={handleLogin}
            variant="contained"
            sx={{
              fontWeight: 'bold',
              color: '#f9f9f9',
              backgroundColor: '#0063e5',
              marginBottom: '12px',
              width: '100%',
              letterSpacing: '1.5px',
              fontSize: '18px',
              padding: '16.5px 0',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#0483ee',
              },
            }}
          >
            GET ALL THERE
          </Button>
          <Typography
            sx={{
              color: 'hsla(0, 0%, 95.3%, 1)',
              fontSize: '11px',
              margin: '0 0 24px',
              lineHeight: '1.5',
              letterSpacing: '1.5px',
            }}
          >
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
            subscription. As of 10/01/24, the price of Disney+ and The Disney Bundle will increase by
            $1.
          </Typography>
          <Box
            component="img"
            src="/images/cta-logo-two.png"
            alt=""
            sx={{
              maxWidth: '600px',
              marginBottom: '20px',
              display: 'inline-block',
              verticalAlign: 'bottom',
              width: '100%',
            }}
          />
        </Box>
        <Box
          sx={{
            height: '100%',
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url("/images/login-background.jpg")',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Login;
