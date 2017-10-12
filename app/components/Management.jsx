var React = require('react');
import 'react-trumbowyg/dist/trumbowyg.min.css';
import Trumbowyg from 'react-trumbowyg';

class Management extends React.Component {
    constructor(props) {
        super(props);
        this.state = {content: '123'};
        this.submitArticle = this.submitArticle.bind(this);
    }
    submitArticle(){
        this.setState({content:$("#react-trumbowyg").html()});
    }
    render() {
        return (
            <div>
                <Trumbowyg id='react-trumbowyg' buttons={
                    [
                        ['viewHTML'],
                        ['formatting'],
                        'btnGrp-semantic',
                        'btnGrp-justify',
                        'btnGrp-lists',
                        ['fullscreen']
                    ]
                }
                           data='aaaa'
                           placeholder='Type your text!'
                           />
                <button onClick={this.submitArticle}>submit</button>
                <div>it is {this.state.content}</div>
                <div id=""></div>
            </div>
        )
    }
}


module.exports = Management;
