import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import { UseForm } from './hooks/useForm'

import UserForm from './components/UserForm/UserForm'
import ReviewForm from './components/ReviewForm/ReviewForm'
import Thanks from './components/Thanks/Thanks'

import './App.css'

function App() {

	const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

	const { currentStep, currentComponent, changeStep, isFirstStep, isLatestStep } = UseForm(formComponents)

	return (
		<div className="app">
			<header>
				<h2> Deixe sua avaliação </h2>
				<p>
					Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
				</p>
			</header>
			<div className="form-container">
				<p>Etapas</p>
				<form onSubmit={(event) => changeStep(currentStep + 1, event)}>
					<div className="inputs-container">
						{currentComponent}
					</div>
					<div className="actions">
						{!isFirstStep && (
							<button type="button" onClick={(event) => changeStep(currentStep - 1, event)}>
								<GrFormPrevious />
								<span>Voltar</span>
							</button>
						)}

						{!isLatestStep ? (
							<button type="submit">
								<span>Avançar</span>
								<GrFormNext />
							</button>
						) : (
							<button type="button">
								<span>Enviar</span>
								<FiSend />
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	)
}

export default App