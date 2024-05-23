import React , {useEffect,useState} from "react";
// import { AxiosAdmin } from "../../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditAnnonce(){
   const navigate = useNavigate();
   const {id}=useParams;

   const[message, setMessage]= useState('');
 
   const [inputs, setInputs] = useState([]);
   const [image, setPhoto]= useState('');

   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
}
const uploadAnnonce= async()=>{
    const formData= new FormData();
    formData.append('_method', 'PUT');
    formData.append('titre', inputs.titre);
    formData.append('date', inputs.date);
    formData.append('description',inputs.description);
    formData.append('image', image);
    const response= await axios.post("http://127.0.0.1:8000/api/annonceupdate/"+id, formData, {
        headers:{'Content-Type':"multipart/form-data"},
        withXSRFToken: true,
        withCredentials:true,
    } );
    setMessage(response.data.message); //"message": "Product successfully updated.."
    console.log(response)
    setTimeout(()=>{
        navigate('/annonce-list');
    }, 2000);
}
const handleSubmit= async(e)=>{
    e.preventDefault();
    await uploadAnnonce();
 }

 useEffect(() => {
    getannonce();
}, []);

function getannonce() {
    axios.get('"http://127.0.0.1:8000/api/annonces/'+id).then(function(response) {
        console.log(response);
        if (response.data.annonce) {
            setInputs(response.data.annonce);
          }
    });
}

    return(

        <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
                <h5 className="mb-4">Edit Annonce </h5> 
                <p className="text-success"><b>{ message }</b></p>                              
                 
                    <form onSubmit={ handleSubmit}>             
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Annonce Title </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.titre} className="form-control" name="titre" onChange={ handleChange}/>
                    </div>
                    </div>

                    <div className="mb-3 row">
                    <label  className="col-sm-3">Annonce date </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.date} className="form-control" name="date" onChange={ handleChange}/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Description </label>
                    <div className="col-sm-9">
                        <input type="text" value={inputs.description} className="form-control" name="description" onChange={ handleChange} />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Product Image</label>
                    <div className="col-sm-9">
                        <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" height={300} width={300} />
                        <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])} />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    </div>
 
                    </form>
 
             </div>
            </div>
        </div>
    </React.Fragment>

       
    );
}
export default EditAnnonce;