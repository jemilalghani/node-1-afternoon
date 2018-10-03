const express=require('express');
const bodyParser=require('body-parser');
const messageController = require('../controllers/messages_controller')
const app=express();
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build' ) );

app.get('/api/messages', messageController.readMessage);
app.post('/api/messages', messageController.createMessage);
app.put('/api/messages/:id', messageController.updateMessage);
app.delete('/api/messages/:id', messageController.deleteMessage);

app.listen(3001,()=>{
    console.log('👀👀👀👀👀👀 PORT: 3001');
})