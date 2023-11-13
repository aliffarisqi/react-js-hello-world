//library
import React, {Component, Fragment, createContext} from "react"
import {Provider} from "react-redux"
import {BrowserRouter, Route, Link} from "react-router-dom"
import GlobalProvider from "../../context/context"

//Page
import BlogPost from "../Pages/BlogPost/BlogPost"
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost"
import HooksCuy from "../Pages/Hooks/Hooks"
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp"
import Product from "../Pages/Product/Product"
import Youtube from "../Pages/Youtube/Youtube"

//style
import "./Home.css"

class Home extends React.Component {
	//lifecycle
	// state = {
	//     showComponent: true
	// }
	// componentDidMount() {
	//     setTimeout(() => {
	//         this.setState({
	//             showComponent: false
	//         })
	//     }, 6000)
	// }

	render() {
		return (
			<BrowserRouter>
				{/* <div>
                    <p>Youtube bayu alif</p>
                    <hr />
                    <Youtube />
                    <br /><br />
                    <p>Product</p>
                    <hr />
                    <Product />
                    <h2>Life cycle</h2>
                    <hr />
                    {
                        this.state.showComponent
                            ?
                            <LifeCycleComp />
                            : null
                    }
                    <p>BLog Post</p>
                    <hr />
                    <BlogPost />
                </div> */}
				<Fragment>
					<div className="nav">
						<Link to="/" className="link-nav">
							Blog Post
						</Link>
						<Link to="/product" className="link-nav">
							Product
						</Link>
						<Link to="/lifecycle" className="link-nav">
							life cycle
						</Link>
						<Link to="/youtube" className="link-nav">
							Youtube
						</Link>
						<Link to="/hooks" className="link-nav">
							Hooks
						</Link>
					</div>
					<Route path="/" exact component={BlogPost} />
					<Route path="/detail-post/:idPost" component={DetailPost} />
					<Route path="/product" component={Product} />
					<Route path="/lifecycle" component={LifeCycleComp} />
					<Route path="/youtube" component={Youtube} />
					<Route path="/hooks" component={HooksCuy} />
				</Fragment>
			</BrowserRouter>
		)
	}
}

export default GlobalProvider(Home)
