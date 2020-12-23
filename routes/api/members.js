const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members=require('../../Members');



router.get('/', (req,res) =>{
    res.json(members);
});
//or could have written it this way, no curly vbraces needed
//app.get('/api/members2', (req,res) => res.json(members));

router.get('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if( found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }else{
        //res.send('not found');
        res.status(400).json({msg: `invalid member id: ${req.params.id}`});
    }
    
});

//create member
router.post('/', (req, res) => {
    //res.send(req.body);
    //res.send('abc 123');
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email ){
        return res.status(400).json({msg: "name and email required"});
    }

    members.push(newMember);
    res.json(members);
    //res.redirect('/');

});



// update member
router.put('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if( found){
        const updateMember = req.body;
        members.forEach(member => {
            // ternary operator ?
            if(member.id === parseInt(req.params.id)){
                member.name = updateMember.name ?  updateMember.name : member.name;
                member.email = updateMember.email?  updateMember.email : member.email;
                res.json({msg: 'member updated', member});
            }
        });
        
    }else{
        //res.send('not found');
        res.status(400).json({msg: `invalid member id: ${req.params.id}`});
    }
});


//delete
router.delete('/:id', (req, res) =>{
    const found = members.some(member => member.id === parseInt(req.params.id))
    if( found){
        res.json({msg: 'member deleted' , members: members.filter(member => member.id !== parseInt(req.params.id))});
    }else{
        //res.send('not found');
        res.status(400).json({msg: `invalid member id: ${req.params.id}`});
    }
    
});


module.exports=router;