import { useActionState, useId } from "react";

const initialState = {
    data: null,
    submitMessage: null
};

export default function TaskForm({ btnSubmitName = 'Valider', onSubmitCallback = () => { } }) {

    const inputId = useId();

    const formAction = async (prevState, formData) => {
        // Debug sur le formData
        console.log('formData', formData);
        console.log('formData.entries()', formData.entries());
        console.log('Object.fromEntries(...)', Object.fromEntries(formData.entries()));

        // Extraire les données du "formData"
        const data = Object.fromEntries(formData.entries());

        // Validation du name
        if (!data.name && data.name.trim() === '') {
            //? Erreur dans le formulaire !!!
            return {
                data,                                                   //! Donnée du formulaire
                submitMessage: 'Erreur de validation du formulaire !'   //! Message d'erreur
            };
        }

        // Si le fomulaire est valide

        //? - Envoyer les données vers le parent
        onSubmitCallback(data);

        //? - Reset le formulaire
        //? - Si necessaire, effacer le message
        return {
            ...initialState,
            submitMessage: 'Formulaire validé !'
        };
    };

    const [state, handleTaskForm] = useActionState(formAction, initialState);

    return (
        <form action={handleTaskForm}>
            <div>
                <label htmlFor={inputId + '-name'}>Nom : </label>
                <input id={inputId + '-name'} type="text"
                    name="name" defaultValue={state.data?.name} />
            </div>
            <div>
                <label htmlFor={inputId + '-desc'}>Description : </label>
                <textarea id={inputId + '-desc'}
                    name="desc" defaultValue={state.data?.desc} />
            </div>
            <div>
                <label htmlFor={inputId + '-priority'}>Priorité : </label>
                <select id={inputId + '-priority'}
                    name="priority" defaultValue={state.data?.priority}></select>
            </div>
            <div>
                <button type="submit">{btnSubmitName}</button>
                {' '}
                {state.submitMessage && (
                    <span>{state.submitMessage}</span>
                )}
            </div>
        </form>
    );
}