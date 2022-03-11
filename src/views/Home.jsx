import { Button, Container, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <div className="text-center">
        <Typography variant="h2" className="text-center">
          OmniChat
        </Typography>
        <Typography mt={2} mb={3}>
          Chat here, chat there.
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Button variant="contained" size="large">
          Join a room
        </Button>
        <Button variant="outlined" size="large" sx={{ ml: 2 }}>
          Look around
        </Button>
      </div>
    </Container>
  );
}
