import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Logger from 'utils/logger/logger';
import QuestionnaireContainer from 'containers/questionnaire/questionnaire';
import QuestionnaireNav from 'components/questionnaire/questionnaire-nav';
import GenericInputContainer from 'containers/generic-input/generic-input';
import { loadQuestionnaireIfNeeded } from 'actions/questionnaire';
import { setActiveQuestionnaire, setActiveComponents } from 'actions/app-state';

const logger = new Logger('PageQuestionnaire', 'Components');

const mapStateToProps = (state, { params: { id } }) => ({
  questionnaire: state.questionnaireById[id],
  components: state.componentByQuestionnaire[id],
});

const mapDispatchToProps = {
  loadQuestionnaireIfNeeded,
  setActiveQuestionnaire,
  setActiveComponents,
};

export class PageQuestionnaire extends Component {
  static propTypes = {
    loadQuestionnaireIfNeeded: PropTypes.func.isRequired,
    setActiveQuestionnaire: PropTypes.func.isRequired,
    setActiveComponents: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired,
    questionnaire: PropTypes.object,
    components: PropTypes.object,
  };

  static defaultProps = {
    questionnaire: {},
    components: {},
  };

  componentWillMount() {
    logger.debug('Rendering PageQuestionnaire component');
    this.props.loadQuestionnaireIfNeeded(this.props.params.id);
    this.setActive(this.props.questionnaire, this.props.components);
  }
  componentWillUpdate(nextProps) {
    const nextQuestionnaireId = nextProps.questionnaire.id;
    if (nextQuestionnaireId && nextQuestionnaireId !== this.props.questionnaire.id) {
      this.setActive(nextProps.questionnaire, nextProps.components);
    }
  }

  setActive(questionnaire, components) {
    this.props.setActiveQuestionnaire(questionnaire);
    this.props.setActiveComponents(components);
  }

  render() {
    return (
      <div id="page-questionnaire">
        <QuestionnaireNav />
        <QuestionnaireContainer />
        <GenericInputContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageQuestionnaire);
