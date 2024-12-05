import { useState } from "react"

const ApiOne = () =>{
    let[alluser,getuser] = useState([]);
    let[allbook,getbook] = useState([]);
    let[allcom,getcompany] = useState([]);
    let[allemp,getemp] = useState([]);

    const setuser = () =>{
        fetch("user.json")
        .then(userdata=>userdata.json())
        .then(userArray=>{
            getuser(userArray);
        })
    }

    const setbook = () =>{
        fetch("book.json")
        .then(bookdata=>bookdata.json())
        .then(bookArray=>{
            getbook(bookArray);
        })
    }

    const setcompany = () =>{
        fetch("company.json")
        .then(companydata=>companydata.json())
        .then(companyArray=>{
            getcompany(companyArray);
        })
    }

    const setemp = () =>{
        fetch("emp.json")
        .then(empdata=>empdata.json())
        .then(empArray=>{
            getemp(empArray);
        })
    }

    return(
        <section>
            <div>
            <fieldset>
                <legend>User List :{alluser.length}</legend>
                {
                    alluser.map((user, index)=>{
                        return(
                            <p key={index}>{user}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>Book List : {allbook.length}</legend>
                {
                    allbook.map((book,index)=>{
                        return(
                            <p key={index}>{book}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>Company List : {allcom.length}</legend>
                {
                    allcom.map((company,index)=>{
                        return(
                            <p key={index}>{company}</p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend>Employee List : {allemp.length}</legend>
                {
                    allemp.map((employee,index)=>{
                        return(
                            <p key={index}>{employee}</p>
                        )
                    })
                }
            </fieldset>
            </div>
            <div className="div1">
                <div>
                <button onClick={setuser}>Get User</button>
                </div>
                <div>
                <button onClick={setbook}>Get Book</button>
                </div>
                <div>
                <button onClick={setcompany}>Get Company</button>
                </div>
                <div>
                <button onClick={setemp}>Get Employee</button>
                </div>
            </div> 
        </section>
    );
}
 export default ApiOne;