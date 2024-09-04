export const addPhone = <T>(state: T[] , name: T) => [...state, { name }]
export class StateManager<T> {
    state: T[] = []
    constructor(state: T[]) {
        this.state = state
    }
    add = (newValue: T) => {
        console.log('newValue', newValue);
        const newState = [...this.state, newValue]
        this.state = newState
        return newState
    }
    load = (newState: T[]) => {
        this.state = newState
        return this.state
    }
    remove = (id: number, idKey = 'id') => {
        const newState = this.state = this.state.filter((item) => item[idKey] !== id)
        console.log('newState', newState);
        
        this.state = newState
        return newState
    }
    update = <U>(id: number, newValue: U, idKey = 'id') => {
        const newState = this.state = this.state.map((item) => {
            if (item[idKey] === id) {
                return newValue
            }
            return item
        })
        this.state = newState
        return newState
    }

    find = (id: number) => this.state.find(item => item.id === id)
}