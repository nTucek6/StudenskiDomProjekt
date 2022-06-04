//import React, { useState,useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function LoginType()
{
     return(
       <>
        <div className="d-flex justify-content-center">
        <div>
            <div className="p-2"><Link className='btn' to={`/Prijava/${"studentLogin"}`}>Prijava Studenta</Link></div>
            <div className="p-2"><Link className='btn' to={`/Prijava/${"studentRegister"}`}>Registracija Studenta</Link></div>
            <div className="p-2"><Link className='btn' to={`/Prijava/${"adminLogin"}`}>Prijava Admina</Link></div>
        </div>
        </div>
         <Outlet />
         </>
  )
     }


