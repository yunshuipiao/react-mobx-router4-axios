
import {observable, action} from 'mobx'

class ChangeNameStore {

    @observable name = "sun"

    @action
    changeName() {
        if (this.name === "sun") {
            this.name = "wen"
        } else {
            this.name = "sun"
        }
    }
}

export default ChangeNameStore;