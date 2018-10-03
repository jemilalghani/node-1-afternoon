const messages = [];
let id=0;

module.exports={
    createMessage: (req,res)=>{
        const { text, time}= req.body;
        let newMessage = { text, time, id  };
        id++;
        messages.push(newMessage);
        res.send(messages);
    },
    readMessage: (req, res)=>{
        res.json(messages);
        res.send('👍🏾');
    },
    updateMessage: (req,res)=>{
        const messageId= req.params.id;
        const messageIndex=messages.findIndex(message=>message.id===parseInt(messageId));
        if (messageIndex===-1){
            res.status(404).send(`ERROR! A message with id ${messageId} doesn't exist!`)
        } else {
            messages[messageIndex]={...req.body, id:messages[messageIndex].id};
            res.json(messages);
            res.send('👍🏾');
        }
    },
    deleteMessage: (req,res)=>{
        const messageId=req.params.id;
        const messageIndex=messages.findIndex(message=>message.id===parseInt(messageId));
        if (messageIndex===-1){
            res.status(404).send(`ERROR! A message with id ${messageId} doesn't exist!`)
        } else{
            messages.splice(messageIndex,1);
            res.json(messages);
            res.send('👍🏾');
        }
    }
}