import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function DiasporaAssurance() {
  const items = [
    {
      title: "Anti-Scam Protection",
      desc: "Verified property titles and escrow payment options"
    },
    {
      title: "Virtual Tours",
      desc: "360° property views before commitment"
    },
    {
      title: "Legal Support",
      desc: "Documentation and government approval assistance"
    }
  ];

  return (
    <Box py={8} bgcolor="grey.100">
      <Box maxWidth="lg" mx="auto" px={2}>
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Diaspora Investment Solutions
        </Typography>
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}