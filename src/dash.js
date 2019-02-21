import React from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import { SelectField } from "redux-form-material-ui";
import MenuItem from "material-ui/MenuItem";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohorts: [{ id: "1", name: "c1" }, { id: "2", name: "c2" }]
    };
  }

  handleCohortChange(event, values) {
    this.setState({ cohort: values || null });
  }

  submit(values, dispatch) {
    console.log(values);
  }

  cohortMenuItems(values) {
    if (this.state.cohorts) {
      return this.state.cohorts.map((cohort, index) => (
        <MenuItem
          key={index}
          insetChildren={true}
          value={cohort.id}
          checked={values && values.indexOf(cohort.id) > -1}
          primaryText={cohort.name}
        />
      ));
    }
    // if (this.props.cohorts && this.props.cohorts.items) {
    //   return this.props.cohorts.items.map((cohort, index) => (
    //     <MenuItem
    //       key={index}
    //       insetChildren={true}
    //       value={cohort.id}
    //       checked={values && values.indexOf(cohort.id) > -1}
    //       primaryText={cohort.name}
    //     />
    //   ));
    // }
    return <MenuItem />;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field
          name="cohort"
          component={SelectField}
          floatingLabelText="select cohort"
          floatingLabelFixed={true}
          fullWidth={true}
          maxHeight={350}
          multiple={true}
          value={this.state.cohort}
        >
          {this.cohortMenuItems(this.state.cohorts)}
        </Field>
      </form>
    );
  }
}
Dashboard = reduxForm({
  form: "generateDashboardReports",
  enableReinitialize: true
})(Dashboard);
const selector = formValueSelector("generateDashboardReports");
export default connect(
  state => ({
    formValues: selector(state, "cohort")
  }),
  dispatch => ({
    dispatch
  })
)(Dashboard);
