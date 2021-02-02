import React, { useEffect } from 'react';
import {
  Typography,
  Grid,
  makeStyles,
  TextField,
  Button,
  Container,
  Hidden,
} from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';
import useNewUser from '../../hooks/useNewUser';
import genders from '../../assets/constants/genders.json';

const useStyle = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    backgroundColor: theme.palette.background.default,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 25,
  },
  radio: {
    color: theme.palette.secondary.main,
  },
}));

const NewUserForm = (props) => {
  const { setCreateNewUser } = props;
  const classes = useStyle();
  const [
    setName,
    setLastName,
    setEmail,
    setBirthday,
    setGender,
    setCellphone,
    handleSubmit,
    created,
  ] = useNewUser();

  useEffect(() => {
    if (created) {
      setCreateNewUser(false);
    }
  }, [created]);

  const buttonHandler = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <Container className={classes.container}>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Name"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Last Name"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Birthday"
            type="date"
            InputLabelProps={{
              style: { color: '#000' },
              shrink: true,
            }}
            onChange={(e) => setBirthday(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={genders}
            getOptionLabel={(option) => option}
            onChange={(e) => setGender(genders[e.target.value])}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                color="primary"
                label="Gender"
                InputLabelProps={{
                  style: { color: '#000' },
                }}
                onChange={(e) => setGender(e.target.value)}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Cellphone"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            onChange={(e) => setCellphone(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            color="primary"
            label="Email"
            InputLabelProps={{
              style: { color: '#000' },
            }}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-end">
            <Hidden only="xs">
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PersonAdd />}
                onClick={handleSubmit}
              >
                Crear
              </Button>
            </Hidden>
            <Hidden smUp>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PersonAdd />}
                onClick={handleSubmit}
              >
                Crear
              </Button>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewUserForm;
