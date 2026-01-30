const app = require('./src/app');

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening at ${process.env.PORT}`);
})