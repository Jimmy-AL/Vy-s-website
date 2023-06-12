import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
import { Input } from '../Input/input';
import { Select } from '../Select/select';
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const { register, handleSubmit, getValues, formState: { errors }} = useForm();
    const [ group, setGroup ] = useState(0)
    const [ submit, setSubmit ] = useState(0)


    const onSubmit = e => {
        
        emailjs.send('service_lswu8bj', 'template_fqu0d2h', {
            last_name: e.last_name, 
            first_name: e.first_name, 
            org: e.org, 
            email: e.email, 
            msg: e.msg,
        }, '0jhwV1eeQARikLpqn')
            .then((result) => {
                console.log('success')
                console.log(result.text);
                setSubmit(1)
            }, (error) => {
                console.log('error')
                console.log(error.text);
            });
    }

    const updateGroup = e => {
        if (e.currentTarget.value === "2") {
            setGroup(1)
        }
        else {
            setGroup(0)
        }
    }


    return <>
        <div className='grid grid-cols-5 justify-center my-20 mx-10 gap-20'>
            <Select onChange={updateGroup}></Select>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
        {group
            ? <>
                <div className='grid grid-cols-5 justify-center my-20 mx-10 gap-20'>
                    <Input errors={errors} title="Last Name Group 2" type='text' register={register} label="last_name" className=""></Input>
                    <Input errors={errors} title="First Name Group 2" type='text' register={register} label="first_name" className=""></Input>
                    <Input errors={errors} title="Organization Name Group 2" type='text' register={register} label="org" className=""></Input>
                    <Input errors={errors} title="E-mail Group 2" type='text' register={register} label="email" className=""></Input>
                    <Input errors={errors} title="Confirm E-mail Group 2" type='text' register={register} label="email2" getValues={getValues} className=""></Input>
                    <Input errors={errors} title="Message Group 2" type='text' register={register} label="msg" className=""></Input>
                </div>
                <div className="flex text-2xl text-black justify-center space-x-20 mb-10">
                    <button type="submit" className='bg-slate-300 rounded-md row-start-5 col-start-3 px-3 border-2 border-slate-500 py-1 transition hover:border-sky-600 hover:bg-sky-300'>Confirm</button>
                </div>
                <div className='flex text-2xl justify-center mb-20'>
                    {submit
                        ? <p>[Thank you message.]</p>
                        : <></>
                    }
                </div>
            </>
            : <>
                <div className='grid grid-cols-5 justify-center my-20 mx-10 gap-20'>
                    <Input errors={errors} title="Last Name" type='text' register={register} label="last_name" className=""></Input>
                    <Input errors={errors} title="First Name " type='text' register={register} label="first_name" className=""></Input>
                    <Input errors={errors} title="Organization Name" type='text' register={register} label="org" className=""></Input>
                    <Input errors={errors} title="E-mail" type='text' register={register} label="email" className=""></Input>
                    <Input errors={errors} title="Confirm E-mail" type='text' register={register} label="email2" getValues={getValues} className=""></Input>
                    <Input errors={errors} title="Message" type='text' register={register} label="msg" className=""></Input>
                </div>
                <div className="flex text-2xl text-black justify-center space-x-20 mb-10">
                    <button type="submit" className='bg-slate-300 rounded-md row-start-5 col-start-3 px-3 border-2 border-slate-500 py-1 transition hover:border-sky-600 hover:bg-sky-300'>Confirm</button>
                </div>
                <div className='flex text-2xl justify-center mb-20'>
                    {submit
                        ? <p>[Thank you message.]</p>
                        : <></>
                    }
                </div>
            </>
        }
            
        </form>
    </>
}
