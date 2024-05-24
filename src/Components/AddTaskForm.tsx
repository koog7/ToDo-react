import React, { useState } from 'react';

interface AddTaskFormProps {
    onAdd: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
    const [inputText, setInputText] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputText.trim()) return;
        onAdd(inputText);
        setInputText("");
    };

    return (
        <div>
            <form className={'form-block'} onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder={"Add your task!"}
                        name="text"
                        className="input"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTaskForm;
