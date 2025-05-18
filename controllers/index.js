const helloRoute = (req,res)=>{
    res.send('Hello');
}; 
const EmilyRoute = (req,res)=>{
    res.send('Emily');
}; 

module.exports = {
 helloRoute,
 EmilyRoute,
};