import {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
            postImage: ''
        }
    }
    getUserPosts = () => {
        axios.get(`/api/post/:${this.props.user_id}`)
        .then(res => {
            this.setState({posts: res.data})
        })
        .catch(err => console.log(err))
    }

    componentDidMount (){
        this.getUserPosts()
    }

    handleInput = (val) => {
        this.setState({postImage: val})
    }

    createPost = () => {
        axios.post('/api/post', {id: this.props.user_id, postImage: this.state.postImage})
        .then(() => {
            this.getUserPosts()
            this.setState({postImage: ''})
        })
        .catch(err => console.log(err))
    }
deletePost = (id) => {
    axios.delete(`/api/post/${id}`)
    .then(() => {
        this.getUserPosts()
    })
    .catch(err => console.log(err))
}
    render(){

        return(
            <section className ='dashboard'>
            <input
            value={this.state.postImage}
            placeholder='Add Image Url'
            onChange ={e => this.handleInput(e.target.value)}/>
            <button onClick={this.createPost}>Add Post</button>
            <h1>Your Recent Posts</h1>
            <div className='post-flex'>
                {this.state.posts.map(post => (
                    <div key ={post.post_id}>
                        <img className ='post-image' src={post.post_url} alt='MemeMountain User Post'/>
                        <button onClick ={() => this.deletePost(post.post_id)}>Delete</button>
                    </div>
                ))}
            </div>
            </section>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
    user_id: reduxState.user.user_Id}
}

export default connect(mapStateToProps)(Dashboard);