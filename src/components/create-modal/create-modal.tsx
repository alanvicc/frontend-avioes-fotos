import { useEffect, useState } from 'react';
import { usePlaneDataMutate } from '../../hooks/usePlaneDataMutate';
import PlaneData from '../../interface/PlaneData';

import "./modal.css";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [company, setcompany] = useState("");
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = usePlaneDataMutate();

    const submit = () => {
        const PlaneData: PlaneData = {
            title, 
            company,
            image
        }
        mutate(PlaneData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre uma nova aeronave</h2>
                <form className="input-container">
                    <Input label="Modelo da Aeronave" value={title} updateValue={setTitle}/>
                    <Input label="Companhia" value={company} updateValue={setcompany}/>
                    <Input label="Imagem" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}