	{/* create messages collection, you can load it from external file as well */}
	
	const messages = {
		'en': {
			'message0': 'Some text',
			'message1': 'This message is avaliable in any language',
			'message2': 'This message is avaliable in default language only'
		}
		,
		'pl': {
			'message0': 'Jakiś tekst',
			'message1': 'Ta wiadomość jest dostępna w każdym języku'
		}
	};
		
	{/* fill empty translations with default locale translations */}
		
	var defaultLocale = 'en'
		
	for (var id in messages[defaultLocale]) {
		for (var locale in messages) {
			if (!messages[locale][id]) {
				messages[locale][id] = messages[defaultLocale][id]
			}
		}
	}
		
		
	{/* create component with plain multilanguage messages */}
		
	class Component1 extends React.Component {
		render() {
			return (
				<div>
					<ReactIntl.FormattedMessage id='message1'/>
					<br/>
					<ReactIntl.FormattedMessage id='message2'/>
				</div>
			)
		};
	}
		
	{/* create component multilanguage messages as attributes */}
		
	class Component2 extends React.Component {
		render() {
			return (
				<input type='text' placeholder={this.props.intl.formatMessage({id: 'message0'})}/>
			)
		};
	}
		
	var Component2WithIntl = ReactIntl.injectIntl(Component2);
		
	{/* create App class with IntlProvider and some tools to change messages source */}
	
	class App extends React.Component {
		constructor (props) {
			super(props);
			this.state = {locale: 'en'};
		}
		render() {
			return (
				<ReactIntl.IntlProvider locale='en' messages={messages[this.state.locale]}>
					<div>
						<button onClick={() => this.setState({locale: 'en'})}><span className='flag-icon flag-icon-gb'></span></button>
						<button onClick={() => this.setState({locale: 'pl'})}><span className='flag-icon flag-icon-pl'></span></button>
						<br/>
						<Component1/>
						<br/>
						<Component2WithIntl/>
					</div>
				</ReactIntl.IntlProvider>
			)
		};
	}
		
	{/* render App instance using react container */}
	
	ReactDOM.render(<App/>, document.getElementById('react-root'));
	