
import {observable, action} from 'mobx'

class RouterStore {

    @observable history = null

    @action
    setHistory(history) {
        this.history = history
    }
}

export default  new RouterStore();