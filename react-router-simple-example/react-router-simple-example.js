{/* create simple classes displaying content of pages */}

class Index extends React.Component {
	render() {
		return (
			<div>
				Index content
			</div>
		)
	}
}

class Page1 extends React.Component {
	render() {
		return (
			<div>
				Page 1 content
			</div>
		)
	}
}

class Page2 extends React.Component {
	render() {
		return (
			<div>
				Page 2 content
			</div>
		)
	}
}

class Error404 extends React.Component {
	render() {
		return (
			<div>
				Error 404!
			</div>
		)
	}
}

{/* create App class with BrowserRouter and some tools to be able to change pages */}
	
class App extends React.Component {
	render() {
		return (
			<ReactRouter.BrowserRouter>
				Menu:
				<ul>
					<li>
						<ReactRouter.Link to={"/"}>
							Index
						</ReactRouter.Link>
					</li>
					<li>
						<ReactRouter.Link to={"/page1"}>
							Page 1
						</ReactRouter.Link>
					</li>
					<li>
						<ReactRouter.Link to={"/page2"}>
							Page 2
						</ReactRouter.Link>
					</li>
				</ul>
				Content:
				<ReactRouter.Match exactly pattern={"/"} component={Index}/>
				<ReactRouter.Match exactly pattern={"/page1"} component={Page1}/>
				<ReactRouter.Match exactly pattern={"/page2"} component={Page2}/>
				<ReactRouter.Miss component={Error404}/>
			</ReactRouter.BrowserRouter>
		)
	}
}
		
{/* render App instance using react container */}

ReactDOM.render(<App/>, document.getElementById('react-root'));
	