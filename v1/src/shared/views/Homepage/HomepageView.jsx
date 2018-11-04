import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { connect } from 'react-redux'

import { ObjectUtil } from 'utils';

import * as dispatchActions from 'actions';
import SearchBar from 'components/Search/Search.jsx';
import StarsContainer from 'components/Homepage/StarsContainer.jsx';
import ViewWrapper from 'components/common/ViewWrapper.jsx';

class Homepage extends React.Component{
    componentWillMount() {
        const {
            celebrities,
            getAllCelebrities
        } = this.props;

        if(!Object.keys(celebrities).length) {
            getAllCelebrities.withDispatch();
        }
    }


    shouldComponentUpdate(nextProps) {
        const celebritiesUpdated = ObjectUtil.compare(this.props.celebrities, nextProps.celebrities);
        // console.warn(celebritiesUpdated);
        if(celebritiesUpdated) {
            return true;
        }
        return false;
    }

    componentDidMount(){
    }

    render(){
        // console.warn('these are all the props', this.props);
        return (
            <ViewWrapper page="homepage"
                render={true}>
                <Helmet title="Homepage" />
                <SearchBar />
                <StarsContainer celebrities={this.props.celebrities}/>
            </ViewWrapper>
        )
    }
};

const mapStateToProps = ({celebrities}) => ({
    celebrities
});

const mapDispatchToProps = dispatch => ({
    getAllCelebrities: dispatch(dispatchActions.getAllCelebrities.withDispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
