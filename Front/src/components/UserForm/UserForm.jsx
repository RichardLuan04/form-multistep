import './UserForm.css'

const UserForm = ({ data, updateFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" id="name"
                placeholder='Digite o seu nome' required value={data.name || ''}
                onChange={event => updateFieldHandler("name", event.target.value)}/>
            </div>

            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="email" email="email" id="email"
                placeholder='Digite o seu email' required value={data.email || ''} 
                onChange={event => updateFieldHandler("email", event.target.value)}/>
            </div>
        </div>
    )
}

export default UserForm