const Myemployee = () =>{
    let employee = [
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
            <h1>Emplyee List</h1>
            <table>
                <thead>
                    <tr>
                        <th>SI No</th>
                        <th>Employee List</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employee.map((getemployee,index)=>{
                            return(
                                <tr>
                                <td>{index + 1}</td>
                                <td>{getemployee.cname}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Myemployee;