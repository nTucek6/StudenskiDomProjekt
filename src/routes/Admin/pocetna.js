import prizemlje from "../../img/prizemlje.png"
import prvikat from "../../img/1kat.png"
import {useState,useEffect} from 'react';

export default function PocetnaAdmin()
{
    const[blueprint,setBlueprint] = useState("prizemlje");


 function Prizemlje()
 {
    return(
        <>
        <img src={prizemlje} id="pocetnaAdmin" useMap="#prizemlje" className="border border-primary" alt=""/>
        <map name="prizemlje">
        <area target="" alt="prizemlje" title="prizemlje"  coords="1,2,604,655" shape="rect"/>
        <area target="" alt="100" title="100"  coords="609,858,714,1012" shape="rect"/>
        <area target="" alt="102" title="102"  coords="487,855,596,1013" shape="rect"/>
        <area target="" alt="104" title="104"  coords="369,856,478,1013" shape="rect"/>
        <area target="" alt="106" title="106"  coords="253,858,360,1010" shape="rect"/>
        <area target="" alt="107" title="107"  coords="132,858,242,1011" shape="rect"/>
        <area target="" alt="108" title="108"  coords="15,858,124,1010" shape="rect"/>
        <area target="" alt="101" title="101"  coords="257,673,365,787" shape="rect"/>
        <area target="" alt="103" title="103"  coords="136,674,248,787" shape="rect"/>
        <area target="" alt="105" title="105"  coords="15,674,128,786" shape="rect"/>
        <area target="" alt="109" title="109"  coords="618,490,800,579" shape="rect"/>
        <area target="" alt="110" title="110"  coords="1051,492,869,578" shape="rect"/>
        <area target="" alt="111" title="111"  coords="618,400,803,488" shape="rect"/>
        <area target="" alt="112" title="112"  coords="871,397,1051,483" shape="rect"/>
        <area target="" alt="113" title="113"  coords="617,300,799,387" shape="rect"/>
        <area target="" alt="114" title="114"  coords="870,301,1051,386" shape="rect"/>
        <area target="" alt="115" title="115"  coords="618,207,800,294" shape="rect"/>
        <area target="" alt="116" title="116"  coords="868,205,1051,291" shape="rect"/>
        <area target="" alt="117" title="117"  coords="618,110,799,195" shape="rect"/>
        <area target="" alt="118" title="118"  coords="1052,109,869,197" shape="rect"/>
        <area target="" alt="119" title="119"  coords="618,17,799,104" shape="rect"/>
        <area target="" alt="120" title="120"  coords="870,11,1052,100" shape="rect"/>
        </map>
        </>
    )
 }

 function PrviKat()
 {
    return(
        <>
         <img src={prvikat} id="pocetnaAdmin" useMap="#prvikat" className="border border-primary" alt=""/>
         <map name="prvikat">
    <area target="" alt="200" title="200"  coords="606,858,715,1009" shape="rect"/>
    <area target="" alt="201" title="201"  coords="485,672,598,786" shape="rect"/>
    <area target="" alt="202" title="202"  coords="489,855,595,1012" shape="rect"/>
    <area target="" alt="203" title="203"  coords="369,672,477,786" shape="rect"/>
    <area target="" alt="204" title="204"  coords="369,858,479,1009" shape="rect"/>
    <area target="" alt="205" title="205"  coords="250,674,358,785" shape="rect"/>
    <area target="" alt="206" title="206"  coords="248,859,359,1012" shape="rect"/>
    <area target="" alt="207" title="207"  coords="133,673,240,785" shape="rect"/>
    <area target="" alt="208" title="208"  coords="132,859,241,1011" shape="rect"/>
    <area target="" alt="209" title="209"  coords="13,671,122,785" shape="rect"/>
    <area target="" alt="210" title="210"  coords="17,859,124,1012" shape="rect"/>
    <area target="" alt="211" title="211"  coords="618,494,802,578" shape="rect"/>
    <area target="" alt="212" title="212"  coords="1052,492,872,578" shape="rect"/>
    <area target="" alt="213" title="213"  coords="617,400,802,487" shape="rect"/>
    <area target="" alt="214" title="214"  coords="871,396,1052,484" shape="rect"/>
    <area target="" alt="215" title="215"  coords="619,302,799,388" shape="rect"/>
    <area target="" alt="216" title="216"  coords="1052,301,870,388" shape="rect"/>
    <area target="" alt="217" title="217"  coords="617,206,798,290" shape="rect"/>
    <area target="" alt="218" title="218"  coords="872,206,1053,291" shape="rect"/>
    <area target="" alt="219" title="219"  coords="618,110,799,195" shape="rect"/>
    <area target="" alt="220" title="220"  coords="1053,110,871,196" shape="rect"/>
    <area target="" alt="221" title="221"  coords="618,15,799,101" shape="rect"/>
    <area target="" alt="222" title="222"  coords="869,15,1051,100" shape="rect"/>
    </map>
        </>
    )

 }


    return(
        <>
        <div className="mt-3 text-center areaMap">
        <PrviKat />
       </div>
        </>
    )

}

//