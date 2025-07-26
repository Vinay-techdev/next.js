import React from 'react'

const dynamicRoute = async (props) => {
    
    const projectName =  await props.params
    console.log(projectName);

    const searchParams = await props.searchParams
    console.log(searchParams);
    
    
  return (
    <h1>
     My next project name: <b className='text-red-500'>{projectName.projectname}</b>
     <p>Project Stage : <span className='text-green-500'>{searchParams.project}</span></p>
    </h1>
  )
}

export default dynamicRoute
