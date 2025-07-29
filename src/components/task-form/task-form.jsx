import { useId } from "react";


export default function TaskForm({ btnSubmitName='Valider' }) {

    const inputId = useId();

    return (
        <form>
            <div>
                <label htmlFor={inputId + '-name'}>Nom : </label>
                <input id={inputId + '-name'} type="text" />
            </div>
            <div>
                <label htmlFor={inputId + '-desc'}>Description : </label>
                <textarea id={inputId + '-desc'} />
            </div>
            <div>
                <label htmlFor={inputId+'-priority'}>Priorité : </label>
                <select id={inputId+'-priority'}></select>
            </div>
            <div>
                <button type="submit">{btnSubmitName}</button>
            </div>
        </form>
    )
}