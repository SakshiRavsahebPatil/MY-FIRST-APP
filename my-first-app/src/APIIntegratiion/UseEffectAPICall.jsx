import Table from 'react-bootstrap/Table';
import axios from 'axios'
import React,{useEffect, useState} from 'react'

const UseEffectAPICall = () => {

    const [postData , setPostData] = useState()

    const getPostData = async()=>{
        const postData = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(postData);
        setPostData(postData.data)
    }

    useEffect(
        ()=>{
            console.log('Inside useEffect hook');
            getPostData();
        },[]
    )

  return (
    <>
      <h2>Calling API using UseEffect </h2>

    <Table striped bordered hover >
   <thead>
    <tr>
      <th>User Id</th>
      <th>Title</th>
      <th>Body</th>

    </tr>
    </thead>
    <tbody>
        {
            postData.map((data)=>(
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                </tr>
            ))
        }
    </tbody>
    </Table>

       
    </>
  )
}

export default UseEffectAPICall
