import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"


export function NewCycleForm() {
  return (
  
  <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>

          <TaskInput 
            id="task" 
            list="taskSuggestions"
            placeholder="Dê um nome para seu projeto"
            disabled={!!activeCycle}
            {...register('task')}
          />

          <datalist id="taskSuggestions">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="Project 3" />
            <option value="qualquer coisa" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>

          <MinutesAmountInput 
            type="number" 
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true})}
          />
          <span>minutos.</span>
        </FormContainer>
  )
}