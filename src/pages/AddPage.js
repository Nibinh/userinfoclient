import React, { useEffect, useState } from "react";
import HeaderBartwo from "../components/HeaderBartwo";
import { Box, Grid, FormControl, TextField, Button } from "@mui/material";
import { FormikProvider, Form, useFormik, Field } from "formik";
import * as Yup from "yup";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { addUsers, userErrMsgAdd } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "@mui/base/useSnackbar";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { css, keyframes, styled } from "@mui/system";
import { userMsgAdd } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [addingMsg, setAddmsg] = useState("");
  const addMsg = useSelector((state) => state.users.addUserMsg);
  const addErrMsg = useSelector((state) => state.users.addUserErrMsg);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { getRootProps, onClickAway } = useSnackbar({
    open,
    autoHideDuration: 5000,
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const todoSchema = Yup.object().shape({
    name: Yup.string().required("Content is requird"),
    email: Yup.string().required("Content is requird"),
    age: Yup.string().required("Content is requird"),
    role: Yup.string().required("Content is requird"),
    salary: Yup.string().required("Content is requird"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      role: "",
      salary: "",
    },
    validationSchema: todoSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addUsers(values));
    },
  });

  useEffect(() => {
    if (addMsg) {
      setOpen(true);
      setTimeout(() => {
        dispatch(userMsgAdd());
        setOpen(false);
        navigate("/");
      }, 1050);
    }
    if (addErrMsg) {
      setOpen(true);
      setTimeout(() => {
        dispatch(userErrMsgAdd());
        setOpen(false);
      }, 3000);
    }
  }, [addMsg, addErrMsg]);

  const { errors, handleSubmit, handleChange, touched } = formik;
  return (
    <div>
      <HeaderBartwo />
      <Box sx={{ flexGrow: 1, marginTop: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={1} md={4} sm={2}></Grid>
          <Grid item xs={10} md={4} sm={8} style={{ textAlign: "center" }}>
            <Grid sx={{ fontSize: 50, fontFamily: "serif", marginBottom: 4 }}>
              Add User <PersonAddAltIcon sx={{ fontSize: 40 }} />
            </Grid>

            <FormikProvider value={formik}>
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item md={12} xs={12}>
                    <Grid sx={{ marginBottom: 4 }}>
                      <FormControl fullWidth>
                        <TextField
                          label="Enter the User Name"
                          rows={2}
                          name="name"
                          onChange={handleChange}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </FormControl>
                    </Grid>
                    <Grid sx={{ marginBottom: 4 }}>
                      <FormControl fullWidth>
                        <TextField
                          label="Enter User Email"
                          rows={2}
                          name="email"
                          onChange={handleChange}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </FormControl>
                    </Grid>
                    <Grid sx={{ marginBottom: 4 }}>
                      <FormControl fullWidth>
                        <TextField
                          label="Enter User Age"
                          rows={2}
                          name="age"
                          onChange={handleChange}
                          error={Boolean(touched.age && errors.age)}
                          helperText={touched.age && errors.age}
                        />
                      </FormControl>
                    </Grid>
                    <Grid sx={{ marginBottom: 4 }}>
                      <FormControl fullWidth>
                        <TextField
                          label="Enter Role of the User"
                          rows={2}
                          name="role"
                          onChange={handleChange}
                          error={Boolean(touched.role && errors.role)}
                          helperText={touched.role && errors.role}
                        />
                      </FormControl>
                    </Grid>
                    <Grid sx={{ marginBottom: 4 }}>
                      <FormControl fullWidth>
                        <TextField
                          label="Enter User's Salary "
                          rows={2}
                          name="salary"
                          onChange={handleChange}
                          error={Boolean(touched.salary && errors.salary)}
                          helperText={touched.salary && errors.salary}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  {/* {err && (<p>{ err}</p>)} */}
                  <Grid item xs={12} md={12}>
                    <Grid container style={{ justifyContent: "right" }}>
                      <Button type="submit" variant="contained">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </FormikProvider>
          </Grid>
          <Grid item xs={1} md={4} sm={2}></Grid>
        </Grid>
        {open ? (
          <ClickAwayListener onClickAway={onClickAway}>
            <CustomSnackbar {...getRootProps()}>
              {addMsg || addErrMsg}
            </CustomSnackbar>
          </ClickAwayListener>
        ) : null}
      </Box>
    </div>
  );
}

//

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const snackbarInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const CustomSnackbar = styled("div")(
  ({ theme }) => css`
    position: fixed;
    z-index: 5500;
    display: flex;
    right: 16px;
    bottom: 16px;
    left: auto;
    justify-content: start;
    max-width: 560px;
    min-width: 300px;
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[400]};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[50]};
    box-shadow: ${theme.palette.mode === "dark"
      ? `0 4px 8px rgb(0 0 0 / 0.7)`
      : `0 4px 8px rgb(0 0 0 / 0.1)`};
    padding: 0.75rem;
    color: ${theme.palette.mode === "dark" ? blue[200] : blue[900]};
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    animation: ${snackbarInRight} 200ms;
    transition: transform 0.2s ease-out;
  `
);

export default AddPage;
