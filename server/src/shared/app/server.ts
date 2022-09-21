import { app } from '.';

app.listen(process.env.PORT_ACCESS, () => {
  console.log(`🚀 Server is running on PORT ${process.env.PORT_ACCESS}`);
});
