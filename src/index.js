//creating the board
class Board extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    renderSquare(i){
        return (
          <square 
             value={this.state.squares[i]} 
             onClick={() => this.handleClick(i)}
             />
             );
    }
}

//creating the squares

class Square extends React.component {
   
    render() {
        return (
            <button className="square" 
            onClick={() => this.setState({value: 'X'})} 
            > 
                {this.state.value}
            </button>
        );
    }
}