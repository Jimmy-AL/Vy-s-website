

export const Input = ( { title, label, type, register, errors, getValues } ) => {

    if (label === 'msg') {
        return  <div className='col-start-2  grid grid-cols-2 col-span-2 gap-x-10'>
        <label className='justify-self-end text-3xl font-bold '>{title}</label>
        <textarea
        className='text-blue-950 border-solid border text-xl border-black rounded h-48 p-2'
        defaultValue=''
        {...register(label, { required: 'Please leave us a message regarding your request.' })}
        />
        {errors[label] && <p className="error-message col-start-2">{errors[label].message}</p>
        }
    </div>
    }

    else if (label === "email2") {
        return <div className='col-start-2 grid grid-cols-2 col-span-2 gap-x-10'>
            <label className='justify-self-end text-3xl  font-bold'>{title}</label>
            <input
            type={type}
            className='text-blue-950 border-solid border border-black rounded p-2'
            defaultValue=''
            {...register(label, { validate: value => value === getValues('email') || 'Emails do not match.'})}
            />
            {console.log(errors)}
            {errors[label] && <p className="error-message col-start-2">{errors[label].message}</p>
            }
        </div>
    }

    
    return (
        <div className='col-start-2 grid grid-cols-2 col-span-2 gap-x-10'>
            <label className='justify-self-end text-3xl font-bold'>{title}</label>
            <input
            type={type}
            className='text-blue-950 border-solid border border-black rounded p-2'
            defaultValue=''
            {...register(label, { required: 'This field is required.' })}
            />
            {errors[label] && <p className="error-message col-start-2">{errors[label].message}</p>
            }
        </div>
    )
}