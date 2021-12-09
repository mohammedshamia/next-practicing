export default function handler(req, res) {
    if (req.method==="GET")
    {
        res.status(200).json({
            products:[
                {
                    name:'Naim',
                    id:'Naim'
                },
                {
                    name:'Ghanem',
                    id:'Ghanem'
                },
                {
                    name:'Eman',
                    id:'Lubna'
                },
                {
                    name:'Salah',
                    id:'Salah'
                },
            ]
        })

    }
    else res.status(404).json({
        message:"Page Not Found"
    })
}
