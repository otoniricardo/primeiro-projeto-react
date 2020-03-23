import React, { Component } from 'react';
import api from '../../services/api';

export default class Repository extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [response, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: { state: 'open', per_page: 5 },
      }),
    ]);

    this.setState({
      loading: false,
      repository: response.data,
      issues: issues.data,
    });
  }

  render() {
    const { repository, issues, loading } = this.state;
    return <h1>Repository: {}</h1>;
  }
}
// export default Repository;
