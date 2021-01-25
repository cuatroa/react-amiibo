import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactPage () {

    const [amiibos, setAmiibos] = useState([]);

    const { register, handleSubmit, reset , errors } = useForm();

    const onSubmit = (data) => {console.log(data); reset()};

    useEffect(() => {
            axios.get(process.env.REACT_APP_BACK_URL + 'amiibo').then(res => {
                setAmiibos(res.data.amiibo);
            })
    }, [])


    return (
        <div className="d-flex justify-content-center">

            <form onSubmit={handleSubmit(onSubmit)}>
                    <span>Name</span>
                    <input type="text" name="name" id="name" defaultValue="John Doe"
                           ref={register({ required: true })}/>
                    {errors.name && <span>This field is required</span>}

                    <span>Email</span>

                    <input type="text" name="email" id="email"
                           defaultValue="hola@hola.com"
                           ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                    {errors.email && <span>This field is required and need to be an email</span>}

                    <span>Favorite amiibo</span>
                    <select name="favoriteAmiibo" id="favoriteAmiibo" ref={register({ required: true })}>
                    {amiibos.map ((amiibo, i) => 
                        <option key={i} value ={amiibo.name}>{amiibo.name}</option>
                    )}
                    </select>
                    {errors.favoriteAmiibo && <span>This field is required</span>}

                    <span>Message</span>
                    <textarea name="message" id="message" cols="30" rows="10"
                              ref={register({ required: true, minLength: 5, maxLength: 255 })}/>
                    {errors.message && <span>This field is required and need to be more than 5 and less than 255 characters</span>}

                <input type="submit"/>

            </form>
        </div>
    );
}