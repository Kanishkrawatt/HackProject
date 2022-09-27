import React, { useState } from 'react'
import axios from 'axios';


function Admin() {
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");
  const [subheading, setSubHeading] = useState("");
  const [Features, setFeatures] = useState("");
  const [Amenities, setAmenities] = useState("");

  

  
    function submitfunc(e){
      e.preventDefault();
      let data = {
        "Heading": heading,
        "SubHeading": subheading,
        "Image": image,
        "Features": Features.split(" "),
        "Amenities": Amenities.split(" "),
        "Price": price,
        "Content": content,
      }
      axios.post("/api/RoomData",data)      
      setAmenities("");
      setFeatures("");
      setHeading("");
      setSubHeading("");
      setImage("");
      setPrice("");
      setContent("");
    }
    
    
    return (
    
    <form className="w-full max-w-lg mx-auto my-[5%]"  onSubmit={submitfunc} >
    <h1 className="text-2xl text-center font-bold mb-[50px] mt-5">PG Rooms</h1>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
          PGName
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={heading} onChange={(e)=>setHeading(e.target.value)}/>
      </div>
      <div className="w-full px-3 md:w-1/2">
        <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
          Address
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={subheading} onChange={(e)=>setSubHeading(e.target.value)} />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
          About PG
        </label>
        <textarea rows="3" className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  resize-none"  type="text" value={content} onChange={(e)=>setContent(e.target.value)} />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
          PG Img
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={image} onChange={(e)=>setImage(e.target.value)} />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
          Price
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
          Features
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={Features} onChange={(e)=>setFeatures(e.target.value)} />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs  mb-2" htmlFor="grid-password">
          Amenities
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" value={Amenities} onChange={(e)=>setAmenities(e.target.value)} />
      </div>
    </div>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3">
        <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded" type="submit">
          Submit
        </button>
      </div>
      <div className="md:w-2/3"></div>
    </div>
  </form>
  )
  }

export default Admin