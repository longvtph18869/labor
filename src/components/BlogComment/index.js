import React, {Component} from 'react';
import author2 from '../../doc/img/author/author2.png';
import {Link} from "react-router-dom";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";

class BlogComment extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
    }

    state = {
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
    };
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    submitHandler = e => {
        e.preventDefault();
        if (this.validator.allValid()) {
            toast.success('You submitted the form and stuff!')
            this.setState({
                name: '',
                email: '',
                message: '',
            });
            this.validator.hideMessages()
        } else {
            toast.error('Please fill the input');
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    };

    render() {
        const {name, email, message} = this.state;
        return (
            <div className="comment_form">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 m-auto">
                            <form onSubmit={this.submitHandler}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input value={name} name="name" onChange={this.changeHandler} type="text"
                                               placeholder="Full name"/>
                                        {this.validator.message('Full Name', name, 'required')}
                                    </div>
                                    <div className="col-md-6">
                                        <input value={email} name="email" onChange={this.changeHandler} type="text"
                                               placeholder="Email address"/>
                                        {this.validator.message('Email', email, 'required|email')}
                                    </div>
                                    <div className="col-12">
                                    <textarea value={message} onChange={this.changeHandler}
                                              name="message" id="message" cols="30" rows="5"
                                              placeholder="Tell us about your opinion…"/>
                                        {this.validator.message('Message', message, 'required')}
                                    </div>
                                    <div className="col-12">
                                        <button className={this.props.theme === 3 ? 'cbtn4' : 'cbtn2'}
                                                type="submit">POST OPINION
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="space-60"/>
                    <div className="comment_list">
                        <div className="row">
                            <div className="col-12 col-lg-10 m-auto">
                                <h3>Our latest news</h3>
                                <div className="single_comment">
                                    <div className="comment_img">
                                        <img src={author2} alt="author2"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6"><Link to="/">QuomodoSoft</Link>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="replay text-right"><p>replay</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-5"/>
                                    <p>We’ve invested every aspect of how we serve our users over the past Pellentesque
                                        rutrum ante in nulla suscipit, vel posuere leo tristique.</p>
                                </div>
                                <div className="space-15"/>
                                {this.props.dark ? <div className="border_white"/> : <div className="border_black"/>}
                                <div className="space-15"/>
                                <div className="single_comment">
                                    <div className="comment_img">
                                        <img src={author2} alt="author2"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6"><Link to="/">QuomodoSoft</Link>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="replay text-right"><p>replay</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-5"/>
                                    <p>We’ve invested every aspect of how we serve our users over the past Pellentesque
                                        rutrum ante in nulla suscipit, vel posuere leo tristique.</p>
                                </div>
                                <div className="space-15"/>
                                {this.props.dark ? <div className="border_white"/> : <div className="border_black"/>}
                                <div className="space-15"/>
                                <div className="single_comment">
                                    <div className="comment_img">
                                        <img src={author2} alt="author2"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6"><Link to="/">QuomodoSoft</Link>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="replay text-right"><p>replay</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-5"/>
                                    <p>We’ve invested every aspect of how we serve our users over the past Pellentesque
                                        rutrum ante in nulla suscipit, vel posuere leo tristique.</p>
                                </div>
                                <div className="space-15"/>
                                {this.props.dark ? <div className="border_white"/> : <div className="border_black"/>}
                                <div className="space-15"/>
                                <div className="single_comment inner_cm">
                                    <div className="comment_img">
                                        <img src={author2} alt="author2"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6"><Link to="/">QuomodoSoft</Link>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="replay text-right"><p>replay</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-5"/>
                                    <p>We’ve invested every aspect of how we serve our users over the past Pellentesque
                                        rutrum ante in nulla suscipit, vel posuere leo tristique.</p>
                                </div>
                                <div className="space-40"/>
                                <Link to="/" className={this.props.theme === 3 ? 'cbtn4' : 'cbtn2'}>Load More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogComment;