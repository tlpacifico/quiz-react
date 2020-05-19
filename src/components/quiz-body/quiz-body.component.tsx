import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import './quiz-body.styles.scss';

const ListItemLink = (props: any) => (
    <ListItem button component="a" {...props} />
);

const QuizBody = () => (
    <main>
        <aside>
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Question 1" />
                </ListItem>
                <Divider />
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Question 1" />
                </ListItemLink>
            </List>
        </aside>
        <section className="content">
            questionquestion   questionquestion   questionquestion   questionquestion   questionquestion
        </section>
    </main>  
)

export default QuizBody;