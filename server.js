const 
 express=require('express'),
 app=express(),
tf=require('@tensorflow/tfjs');
const tfn = require("@tensorflow/tfjs-node");
const handler = tfn.io.fileSystem("./tfmodel/model.json");

const loadmodel=async()=>{
    try{
        const model = await tf.loadLayersModel(handler);
console.log(model)
return 'lol'
}catch(err){
    console.log('error')
    console.log(err)
}
}
app.use(express.json())
app.get('/',(req,res)=>{
    let k='lol'
loadmodel().then(d=>{
    k='hello'
}).catch(err=>{
    console.log(err)
})
res.send(k)
})
app.listen(5000,()=>{
    console.log('hello')
})