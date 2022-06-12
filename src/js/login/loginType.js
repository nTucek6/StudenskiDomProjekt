//import React, { useState,useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";


export default function LoginType()
{
  //d-flex justify-content-center p-2
     return(
       <>
        <div className="d-flex justify-content-center">
        <div className="row row-cols-1">
          
            <div className="col text-center"><Link className='btn' to={`/Prijava/${"studentLogin"}`}>Prijava Studenta</Link></div>
            <div className="col text-center"><Link className='btn' to={`/Prijava/${"studentRegister"}`}>Registracija Studenta</Link></div>
            <div className="col text-center"><Link className='btn' to={`/Prijava/${"adminLogin"}`}>Prijava Admina</Link></div>
           
        </div>
        </div>
         <Outlet />
         </>
  )
     }


