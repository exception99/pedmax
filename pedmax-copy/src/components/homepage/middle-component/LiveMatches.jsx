import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { setLiveSportId } from "../../../redux/actions/sportIdGetSetAction";

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 0,
    flexGrow: 0,
    width: "135%",
    height: "15%",
    marginLeft: "-100px",
    backgroundColor: theme.palette.background.paper,
    marginTop: "15px",
    color: "black",
  },
}));

const LiveMatches = () => {
  const dispatch = useDispatch();
  const sportsData = useSelector((state) => state.list_of_sports.data);
  const [value, setValue] = useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {sportsData.map((t, index) => {
              return (
                <Tab
                  key={t.id}
                  label={t.name}
                  {...a11yProps(index)}
                  onClick={() => {
                    dispatch(setLiveSportId(t.id));
                  }}
                />
              );
            })}
            ;
          </Tabs>
        </AppBar>

        <Box
          display="flex"
          p={1}
          bgcolor="background.paper"
          justifyContent="center"
        >
          {"No Live Match available, try other sports"}
        </Box>
      </div>
    </>
  );
};

export default LiveMatches;
