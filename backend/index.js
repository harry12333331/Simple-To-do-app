const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const { createtodo } = require("./types");
const { updatetodo } = require("./types");
const { todo } = require("./db");

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API');
});

app.post('/todo', async (req, res) => {
    const payload = req.body;
    const payloadparse = createtodo.safeParse(payload);
    if (!payloadparse.success) {
        res.status(411).json({
            mesg: "Invalid Inputs"
        });
        return;
    }
    // Save to database
    await todo.create({
        title: payload.title,
        description: payload.description,
        completed: false
    });
    res.json({
        mesg: "Todo created successfully"
    });
});

app.put('/completed', async (req, res) => {
    const updatepayload = req.body;
    const payloadparse = updatetodo.safeParse(updatepayload);
    if (!payloadparse.success) {
        res.status(402).json({
            mesg: "Invalid Inputs"
        });
        return;
    }
    await todo.update({
        _id: updatepayload.id
    }, {
        completed: true
    });
    res.json({
        mesg: "Todo completed successfully"
    });
});

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
