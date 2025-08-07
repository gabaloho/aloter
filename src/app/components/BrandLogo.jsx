import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

export default function BrandLogo() {
  return (
    <Box display="flex" alignItems="center">
      <Avatar
        src="/logo.svg"
        alt="ALOTER REALTY LTD"
        sx={{ width: 48, height: 48, mr: 2 }}
        variant="rounded"
      />
      <Box>
        <Typography variant="h6" fontWeight="bold">
          ALOTER REALTY LTD
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Turning your realty fantasies into reality
        </Typography>
      </Box>
    </Box>
  );
}