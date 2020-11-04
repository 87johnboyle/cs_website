import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from './layout'


const Join = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

	return (
        <Layout>
        <div>
			<form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:<input type="text" name="name" /></label>
            <input type="submit" value="Submit" />
            </form>
        </div>
        </Layout>
	)
}

export default Join;