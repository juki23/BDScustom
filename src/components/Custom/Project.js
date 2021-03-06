import React, { Component } from 'react';
import { actFetchProjectRequest, actFetchProjectByDistrictRequest } from './../../actions/index';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Project extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		var { match } = this.props;
		if (match) {
			var id = match.params.id;
			this.props.onGetProjectByDistrict(id);
		} else {
			this.props.onGetProject();
		};
	};

	componentDidUpdate(prevProps) {
		var { match } = this.props;
		if (prevProps.match && match) {
			if (prevProps.match.params.id !== match.params.id) {
				var id = match.params.id;
				this.props.onGetProjectByDistrict(id);
			};
		};
	};

	render() {
		var { project, match } = this.props;
		var district = project.length > 0 ? project[0].district_name : "";
		return (
			<div>
				<div className="post-list">
					<div className="container">
						<div className="row">
							<legend>
								<span>
									<i className="fa fa-caret-right" aria-hidden="true" />
									{match ? `Căn hộ ${district}` : "Tất cả dự án"}
									<i className="fa fa-caret-left" aria-hidden="true" />
								</span>
							</legend>
							<div className="col-md-12">
								<div className="duan-intro">
									<p>&nbsp;</p>
									<p>&nbsp;</p>
								</div>
							</div>
							{this.showProject(project)}
							<div className="clearfix" />
							<div className="page-nav">
								<div className="pages clearfix" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	showProject = (project) => {
		var result = [];
		if (project.length <= 0) return result;
		result = project.map((proj, index) => {
			return (
				<div key={index} className="col-md-4 col-sm-6">
					<div className="duan-loop">
						<div className="loop-img-wrapper">
							<Link style={{ textAlign: 'center' }} to={`/project/item/${proj.id}`}>
								<div className="mask" />
								<img width={338} height={228} src={require("./../App/wp-content/uploads/2017/09/vi-tri-du-an-one-verandah-mapletree-quan-2-338x228.jpg")} className="attachment-custom-duan size-custom-duan wp-post-image" alt="one verandah mapletree" />
							</Link>
						</div>
						<div className="info-wrapper">
							<div className="info-inner">
								<Link to={`/project/item/${proj.id}`}>
									<h2 className="duan-title">{proj.project_name}</h2>
								</Link>
								<div className="info-loop"><b>Giá:</b> <span>{proj.price}</span></div>
								<div className="info-loop"><b>Vị trí:</b> {proj.address}</div>
								<div className="social-loop">
									<a target="_blank" href="https://www.facebook.com">
										<i className="fa fa-facebook" aria-hidden="true" /></a>
								</div>
								<Link to={`/project/item/${proj.id}`}><div className="read-btn">CHI TIẾT</div></Link>
							</div>
						</div>
					</div>
				</div>
			);
		})
		return result;
	}
}

const mapStateToProps = state => {
	return {
		project: state.project
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onGetProject: () => {
			dispatch(actFetchProjectRequest());
		},
		onGetProjectByDistrict: (id) => {
			dispatch(actFetchProjectByDistrictRequest(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);