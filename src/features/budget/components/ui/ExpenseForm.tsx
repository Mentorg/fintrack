import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const initialValues = {
  title: "",
  currentAmount: 0,
  limit: 0,
};

const validationSchema = yup.object().shape({
  title: yup.string().required("required"),
  currentAmount: yup.number().required("required"),
  limit: yup.number().required("required"),
});

type ExpenseFormProps = {
  title: string;
  currentAmount: number;
  limit: number;
}

const ExpenseForm = () => {
  const handleFormSubmit = (values: ExpenseFormProps) => {
    console.log(values);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ textAlign: "center" }} >Set a new limit</Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", gap: 3, flexDirection: "column", mt: 2 }}>
              <TextField
                fullWidth
                variant="filled"
                color="info"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  variant="filled"
                  color="info"
                  type="number"
                  label="Current Amount"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.currentAmount}
                  name="currentAmount"
                  error={!!touched.currentAmount && !!errors.currentAmount}
                  helperText={touched.currentAmount && errors.currentAmount}
                />
                <TextField
                  variant="filled"
                  color="info"
                  type="number"
                  label="Limit"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.limit}
                  name="limit"
                  error={!!touched.limit && !!errors.limit}
                  helperText={touched.limit && errors.limit}
                />
              </Box>
              <Button type="submit" color="info" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ExpenseForm;
