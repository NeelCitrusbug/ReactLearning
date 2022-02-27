import React,{Component} from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'Neel'
        }
    }

    componentDidMount(){
        setInterval(() => this.setState({name:'Neel'}), 2000)
    }

    render() {
        console.log("parent comp render")
        return(
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}


export default ParentComp