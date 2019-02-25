import React from "react";
import { findDomNode } from "react-dom";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from "redux-form";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
const renderField = field => {
  return (
    <div>
      <div>
        <SelectField
          {...field}
          {...field.input}
          onChange={(event, index, value) => field.input.onChange(value)}
        />
        <span style={{ color: "red" }}>{field.meta.error}</span>
      </div>
    </div>
  );
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cohorts: [
        { id: "1", name: "c1" },
        { id: "2", name: "c2" },
        { id: "3", name: "c3" }
      ],
      cohort: null,
      validationErr: null
    };
  }

  handleCohortChange(event, values) {
    if (values.length > 2) {
      return;
    }
    console.log("values in change", values);
    this.setState({ cohort: values || null });
  }

  submit(values, dispatch) {
    console.log(values);
  }

  cohortMenuItems(values) {
    if (this.state.cohorts) {
      const cmenuitems = this.state.cohorts.map((cohort, index) => {
        return (
          <MenuItem
            key={index}
            insetChildren={true}
            value={cohort.id}
            primaryText={cohort.name}
          />
        );
      });
      return cmenuitems;
    }

    return <MenuItem />;
  }
  validate(values) {
    if (values && values.length > 2) {
      return "You can select max upto 20 cohorts";
    }
  }

  render() {
    const { handleSubmit } = this.props;
    // console.log(this.state.cohort);
    return (
      <form onSubmit={handleSubmit(this.submit.bind(this))}>
        <Field
          name="cohort"
          onChange={this.handleCohortChange.bind(this)}
          component={renderField}
          floatingLabelText="select cohort"
          floatingLabelFixed={true}
          fullWidth={true}
          maxHeight={350}
          multiple={true}
          value={this.state.cohort}
          validate={this.validate}
        >
          {this.cohortMenuItems(this.state.cohorts)}
        </Field>
        <span style={{ color: "red" }}>{this.state.validationErr}</span>
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
