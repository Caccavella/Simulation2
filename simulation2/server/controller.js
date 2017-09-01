module.exports={

    createHomes: (req, res) => {
        const {userid, propertyName, propertyDescription, address, city, state, zip, imageUrl, loanAmount, monthlyMortgage, recommendedRent, desiredRent}=req.body;
        const dbInstance = req.app.get('db');
        dbInstance.createHomes(userid, propertyName, propertyDescription, address, city, state, zip, imageUrl, loanAmount, monthlyMortgage, recommendedRent, desiredRent)
        .then((homes) => res.status(200).send(homes))
        .catch(err => {
            console.log(err)
            res.status(500).send()
        })
    },

    getHomes: (req, res) => {
        const {params} = req;
        const dbInstance = req.app.get('db');
        dbInstance.getHomes(params.id)
            .then(homes => res.status(200).send(homes))
            .catch(err => res.status(500).send(err))
            //when we log in and componentDidMount we need to send userid as a param.
    },

    deleteHomes: (req,res) => {
        const {params} = req;
        const dbInstance = req.app.get('db');
        dbInstance.deleteHomes(params.id)
            .then(homes => res.status(200).send(homes))
            .catch(err => res.status(500).send(err))
    },

    // filterHomes: (req, res) => {
    //     const {params} = req;
    //     const dbInstance = req.app.get('db');
    //     dbInstance.filterHomes(params.filter)
    //         .then(homes => res.status(200).send(homes))
    //         .catch(err => res.status(500).send(err))
    // }


}

//  OBJECT INPUTS
//  userid, propertyName, propertyDescription, address, city, state, zip, imageUrl, loanAmount, monthlyMortgage, recommendedRent, desiredRent











// {
//     userid: 1,
//     userName: 'TrentB101',
//     password: 'TB101'
// }