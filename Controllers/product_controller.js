const addData = (req,res)=>{
    res.send("data has been send added successfully");
}

const getData = (req,res)=>{
    res.send("data has been fetched")
}

const updateData = (req,res)=>{
    const update_data = req.params.id
    res.send(`Data has been updated ${updateData}`)
}

const deleteData = (req,res)=>{
    const delete_data = req.params.id;
    res.send(`Data has been deleted ${deleteData}`)
} 


module.exports = {
    addData,
    getData,
    updateData,
    deleteData
}
