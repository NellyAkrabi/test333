import express from 'express';
import cors from "cors";

const app = express();


const PORT = 5554;

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>');
});
app.listen(PORT, console.log(`Server running on port ${PORT}`));

