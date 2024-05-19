interface EnunciadoProps {
    texto: string;
}


export default function Enunciado({texto}: EnunciadoProps)  {
    return (
        <div>
            <div className={``}>
                {texto}
            </div>
        </div>
    );
}
