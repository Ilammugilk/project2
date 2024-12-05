const Mycustomer = () =>{
    let customer = [
        {cname:"Kalaimani"},
        {cname:"kaviarasan"},
        {cname:"AjiyaRaji"},
        {cname:"Raji"},
        {cname:"Ajay"},
        {cname:"Harish"},
        {cname:"Yuvan Raj"},
        {cname:"Lakshmi"},
        {cname:"Nivedhitha"},
        {cname:"Ilammugil"}
    ];
    return(
        <section>
            <h1>Customer List</h1>
            <table>
                <thead>
                    <tr>
                        <th>SI No</th>
                        <th>Customer List</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer.map((getcustomer,index)=>{
                            return(
                                <tr>
                                <td>{index + 1}</td>
                                <td>{getcustomer.cname}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Mycustomer;