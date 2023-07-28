const express= require('express');
const chefData=require('./chef.json')
const chefInfo_RecipeDetails=require('./ChefRecipes.json')

const app = express()
const cors=require('cors')
app.use(cors())

app.get('/',(req,res)=>{
    res.json({message:'hello from server'})
})

app.get('/allData',(req,res)=>{
    res.send(chefData)
})

app.get('/chefdetails/:id',(req,res)=>{
    // res.send(chefInfo_RecipeDetails)
    const id=req.params.id
    // console.log(id);
    const selectedRecipe=chefInfo_RecipeDetails.find(n=>n.chef_id == id)
    res.send(selectedRecipe)
})

app.listen(5000,()=>{
    console.log('Server running in port 5000');
})
