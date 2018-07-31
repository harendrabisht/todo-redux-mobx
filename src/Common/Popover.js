import React, {PureComponent} from 'react'
import classnames from 'classnames';

export default class Popover extends PureComponent {
    constructor(props) {
        super(props);
        this.openPopup = this
            .openPopup
            .bind(this);
        this.state = {
            isOpen: false
        }
    }
    openPopup(e) {
        let {isOpen} = this.state;
        isOpen = !isOpen;
        this.setState({isOpen: isOpen});
    }

    componentDidMount(){
        document.addEventListener('click', (e)=>{
            if(e.target.className !== 'dot-link'){
                document.getElementsByClassName('popup')[0] && document.getElementsByClassName('popup')[0].classList.remove("active");
            }
            
        });
    }


    render() {
        let {cls, children} = this.props;
        let {isOpen} = this.state;
        return (
            <div className={classnames("popover-container", cls)}>
                <a href="javascript:void(0)" className="dot-link" onClick={this.openPopup}></a>
                <div
                    className={classnames("popup", isOpen
                    ? 'active'
                    : '')}  onClick={this.openPopup}>
                    {children}
                </div>
            </div>
        )
    }
}
