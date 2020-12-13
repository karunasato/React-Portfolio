import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Main.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: "auto"
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '50vh'
  },
  img:{
      width: "30%",

  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <h1> About Me </h1>
              <img className={classes.img} alt="Karuna" src="\Images\photo.jpg"/>
              <p >I grew up in Seattle, WA and recieved a degree in Associates of Arts and Science from Bellevue College, as well as a degree in Funeral Service Education from Lake Washington Technical Institute. I previously worked in the medical field, funeral industry, and most recently in the financial industry. I have always had a curiousity in the tech industry and am recent graduate of the University of Washington Coding Bootcamp. I am eager to pursue a new career in tech.</p>
              
          </Paper>
          <div className="overlay" style={{width:"100%", position:"relative",top:"-50vh",height: "100%", background:"black", opacity:"0"}}></div>
        </Grid>
        <Grid item xs={6}>    
          <Paper className={classes.paper}>
            <h1>Connect with Me</h1>
            <h2><a class="github" href="https://github.com/karunasato"> GitHub</a></h2> 
            <h2><a class="linkedIn" href="https://www.linkedin.com/in/karuna-sato-94aa401a8/"> LinkedIn</a> </h2>

            <h2> <a class="resume" href="Images\Resume2020.pdf">Resume</a></h2>
            <h2>E-mail: karuna.sato@comcast.net</h2>
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h1>Mood Swing</h1>
              <img className={classes.img} alt="Mood Swing" src="\Images\Mood Swing.PNG"/>
              <p> This application is a media player that changes its content dynamically based on the user's mood. It is powered by React.JS, using MERN stack with Tensorflow.JS. Users will be able to show their moods with a thumbs-up or thumbs-down and music will start playing.</p>
              <li>Link:<a href="https://mood-swing.herokuapp.com/"> https://mood-swing.herokuapp.com/</a></li>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>Password Generator</h1>
              <img className={classes.img} alt="Password Generator" src="\Images\passwordGenerator.JPG"/>
              <p>This app helps users generate a randomized secure password. Users are prompted to answer a series of questions such as length of password and what types of characters they would like. </p>
              <li>Languages Used: HTML/CSS/Javascript</li>
              <li>Link:<a href="https://karunasato.github.io/Password-Generator/"> https://karunasato.github.io/Password-Generator/</a></li>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <h1>Work Day Scheduler</h1>
              <img className={classes.img} alt="Work Day Scheduler" src="\Images\workDaySched.PNG"/>
              <p>This calendar app allows users to save events for each hour of the day. The app runs dynamically in the browser.</p>
                <li>Languages Used: HTML/CSS/JavaScript/jQuery</li>
                <li>Link:<a href="https://karunasato.github.io/work_day_scheduler/"> https://karunasato.github.io/work_day_scheduler/</a></li>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h1>Dine-In-Travel Experience</h1>
              <img className={classes.img} alt="Dine In Travel" src="\Images\dine-in-travel.PNG"/>
              <p>This is my first collaborative project with other future full-stack web developers. During the COVID19 pandemic, we wanted to create an app where users can experience cuisines around the world during the travel ban that has been implemented.</p>
              <li>Languages Used: HTML/CSS/JavaScript</li>
              <li>Link:<a href="https://karunasato.github.io/Dine-in-Travel/"> https://karunasato.github.io/Dine-in-Travel/</a></li>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <h1>Employee Tracker</h1>
              <img className={classes.img} alt="Employee Tracker" src="\Images\EmployeeTracker.PNG"/>
              <p>This is a command-line app using inquirer and MySQL. This app helps business owners view, manage, and update their employees and department. A video demo of the app is listed below.</p>
              <li>Languages Used: Node/Inquirer/ MySQL</li>
              <li>Link: <a href="https://drive.google.com/file/d/1yJMwAMKHDZ4Tg7Pa3kg3vaFyrK0K1fj5/view">https://drive.google.com/file/d/1yJMwAMKHDZ4Tg7Pa3kg3vaFyrK0K1fj5/view</a></li>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <h1>Burger App</h1>
              <img className={classes.img} alt="Burger App" src="\Images\burger.PNG"/>
              <p>This app allows users to add and track burgers that have been devoured and not devoured. The data is stored in MySQL and uses Node express and handlebars to serve the HTML content.</p>
              <li>Languages Used: Node Express/ MySQL/Handlebars/CSS/Javascript</li>
              <li>Link:<a href="https://warm-wave-11682.herokuapp.com/"> https://warm-wave-11682.herokuapp.com/</a></li>

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <h1>Book Face</h1>
              <img className={classes.img} alt="Book Face" src="\Images\BookFace.PNG"/>
              <p>This is my second collaborative project. BookFace is a study app geared towards beginner devs that are looking for resources on web development. It features different subjects/languages that will give users a list of book and video resources.</p>
              <li>Languages Used: Node Express/ JavaScript/ Handlebars/MySQL/ Passport/ CSS</li>
              <li>Link:<a href="https://bookface2020.herokuapp.com/">https://bookface2020.herokuapp.com/</a></li>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
