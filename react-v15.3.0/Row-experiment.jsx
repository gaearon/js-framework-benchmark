'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
window.rowsUpdated = 0;
window.rowsMounted = 0;


var rootDivtag = {
	id: 4,
	constProps: {}
}

var btag = {
	id: 5,
	constProps: {}
}

var divWatTag = {
	id: 6,
	constProps: { className: 1 }
}

var divWatxTag = {
	id: 7,
	constProps: { className: 1 }
}

var divWatxxTag = {
	id: 8,
	constProps: { className: 1 }
}

var itag = {
	id: 9,
	constProps: {}
}

var spantag = {
	id: 10,
	constProps: {}
}

function Recurse({ n }) {
	if (n <= 0) {
		return null
	}

	return (
		{
			type: 'div',
			tag: rootDivtag,
			$$typeof,
			props: {
				children: [
					{
						type: 'b',
						tag: btag,
						$$typeof,
						props: {
							children: [
								'hello ',
								n
							]
						}
					},
					{
						type: 'div',
						tag: divWatTag,
						$$typeof,
						props: {
							className: 'wat',
							children: 
								{
									type: 'div',
									tag: divWatxTag,
									$$typeof,
									props: {
										className: 'watx',
										children:
											{
												type: 'div',
												tag: divWatxxTag,
												$$typeof,
												props: {
													className: 'watxx',
													children: [
														{
															type: 'b',
															tag: btag,
															$$typeof,
															props: {
																children: {
																	type: 'i',
																	tag: itag,
																	$$typeof,
																	props: {
																		children: [
																			'lol ',
																			'wat',
																			' ',
																			{
																				type: 'span',
																				tag: spantag,
																				$$typeof,
																				props: {
																					children: 'cannot be'
																				}
																			}
																		]
																	}
																}
															}
														},
														{
															type: Recurse,
															$$typeof,
															tag: recursetag,
															props: {
																n: n - 2
															}
														}
													]
												}
											}
										
									}
								}
							
						}
					},
					{
						type: Recurse,
						$$typeof,
						tag: recursetag,
						props: {
							n: n - 1
						}
					}
				]
			}
		}
	)
}

var $$typeof = Symbol.for('react.element');

var trtag = {
	id: 1,
	constProps: {}
};

var tdtag = {
	id: 2,
	constProps: { className: 1 }
};

var recursetag = {
	id: 3,
	constProps: { className: 1 }
}


export class Row extends React.Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.data !== this.props.data || nextProps.styleClass !== this.props.styleClass;
	}
	onDelete() {
		this.props.onDelete(this.props.data.id);
	}
	onClick() {
		this.props.onClick(this.props.data.id);
	}
	render() {
		let {styleClass, onClick, onDelete, data} = this.props;
		return {
			type: 'tr',
			tag: trtag,
			$$typeof,
			props: {
				className: styleClass,
				children: [{
					type: 'td',
					tag: tdtag,
					$$typeof,
					props: {
						className: 'col-md-1',
						children: data.id
					}
				}, {
					type: 'td',
					tag: tdtag,
					$$typeof,
					props: {
						className: 'col-md-4',
						children: data.label
					}
				}, {
					type: 'td',
					tag: tdtag,
					$$typeof,
					props: {
						className: 'col-md-1',
						children: {
							type: Recurse,
							tag: recursetag,
							$$typeof,
							props: {
								n: 3
							}
						}
					}
				}]
			}
		}
	}
}

