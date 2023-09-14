import "./card.css";

interface CardProps {
    company: string,
    title: string,
    image: string
}

export function Card({ company, image, title } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>Modelo: {title}</h2>
            <h3>Companhia: {company}</h3>
        </div>
    )
}