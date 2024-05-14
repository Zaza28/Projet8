import "../pages/Logements";

export default function Logement ({pictures, title}){
return(
    <>
    <div className="background-Img">
        {pictures.map((picture, index)=>
        <img key={index} className="img-banner-logement" src={picture} alt={title} />

        )}
    </div>

    </>
)
}