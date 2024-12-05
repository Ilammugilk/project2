const Mycity = () =>{
    let Citylist = [
        {cityname:"Bangalore"},
        {cityname:"Mangalore"},
        {cityname:"Kolkata"},
        {cityname:"Mumbai"},
        {cityname:"Goa"},
        {cityname:"Delhi"},
        {cityname:"Kerala"},
        {cityname:"Karnataka"}
    ];
    return(
        <section>
            <h1>City List</h1>
            <table>
                <thead>
                    <tr>
                        <th>SI No</th>
                        <th>City Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    Citylist.map((getcity,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{getcity.cityname}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </section>
    )
}

export default Mycity;