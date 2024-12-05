const Mycompany = () =>{
    let companylist= ['IBM','Infosys','TCS','Prodapt','Cisco','Cognizant','Google'];
    return(
        <section>
            <h1>Company List</h1>
            <p>{companylist[1]}</p>
            {
                companylist.map((allcompany,index)=>{
                    return(
                        <p className="allcomapny" key={index}>{allcompany}</p>
                    );
                })
            }
        </section>
    );
}
export default Mycompany;