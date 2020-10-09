import React, { useState, useEffect } from 'react'
import  {db}  from '../firebase'


const LinkForm = (props) => {

    const initalStateValues = {
        url: "",
        name: "",
        description: ""
    };
    const [values, setValues] = useState(initalStateValues)

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({...values, [name]: value});
              
    }
 
    const handleSubmit = e => {
        e.preventDefault();      
        
        
        props.addOrEditLink(values);
        setValues({...initalStateValues}); 
    }


    const getLinkById = async (id) => {
       const doc = await db.collection('links').doc(id).get();
       setValues({...doc.data()})
    }

    useEffect(() => {
        if (props.currentId === '') {
            setValues({ ...initalStateValues });
        } else {
            getLinkById(props.currentId)
        }
    }, [props.currentId]);


        return (
        <form className="card card-body" onSubmit={handleSubmit}> 
            <div className="form-group input-group">
                <div className="input-group-text bg light">
                     <i className="material-icons">insert_link</i>
                </div>
                <input value={values.url} onChange={handleInputChange} type="text" className="form-control" placeholder="https//someurl.com" name="url"/>
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input value={values.name} onChange={handleInputChange} type="text" className="form-control" name="name"  placeholder="Website name"/>
            </div>
            <div className="form-group">
                <textarea value={values.description} onChange={handleInputChange} name="description" id="" cols="30" rows="3" className="form-control" placeholder="Write a description" ></textarea>
            </div>
            <button className="btn btn-primary btn-block">
                {props.currentId === '' ? 'Save' : 'Update'}
            </button>
         </form>
    )
}

export default LinkForm;