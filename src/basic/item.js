const Myitem = ()=>{
    let Itemlist =['Book','Phone','Laptop','Mouse','Keyboard','Tap'];
    return(
        <section>
        <h1>Item List</h1>
        <p>{Itemlist[1]}</p>
        {
            Itemlist.map((allitem,index)=>{
                return(
                    <p className="itemlist" key={index}>{allitem}</p>
                );
            })
        }
        </section>
    );
}
export default Myitem;