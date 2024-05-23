import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
// import { AxiosAdmin } from "../../api/axios";
import axios from "axios";



function AnnonceList (){
    const[annonce, setAnnonce]= useState([]);

    useEffect( ()=>{
        const getAnnonce= ()=>{
            fetch("http://127.0.0.1:8000/api/annonces")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.annonces)
                setAnnonce(response.annonces)
            })
            .catch(error=>{ console.log(error)});
        }
        getAnnonce();
    },[]);
    const deleteAnnonce = (id) => {
        axios.delete('http://127.0.0.1:8000/api/annoncedelete/'+id).then(function(response){
            console.log(response.data);
            alert("Successfully Deleted");
        });
    }


return(
    <React.Fragment>
    <div className="container container_overflow">
        <div className="row">
            <div className="col-12">
                <h5 className="mb-4">Liste des Annonces</h5> 
                <p className="text-danger"> </p>                 
                        <table className="table table-bordered">
                        <thead>
                        <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Annonce Title</th>
                        <th scope="col">Annonce Date</th>
                        <th scope="col">Annonce Description</th>
                        <th scope="col">Annonce Image</th>
                        <th scope="col" width="200">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                annonce.map((pdata, index)=>(
                                    <tr key={index}>
                                    <td>{index+1 } </td>
                                    <td>{pdata.titre } </td>
                                    <td>{pdata.date } </td>
                                    <td>{pdata.description } </td>
                                    <td><img src={`http://127.0.0.1:8000/storage/${pdata.image}`} alt="" height={50} width={90} /></td>
                                    <td>
                                        <Link to={`/editannonce/${pdata.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                                        <button onClick={() => deleteAnnonce(pdata.id)} className="btn btn-danger">Delete</button>
                                    </td>
                                    </tr>
                                ))
                            }
                       
                                                        
                        </tbody>
                        </table>  
            </div>
        </div>
    </div>
</React.Fragment>

);

}

export default AnnonceList;