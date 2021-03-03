import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BookDetail from "./component/BookDetail";
import BookList from "./component/BookList";
import Books from "./Books";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: Books,
      book: Books[0],
    };
  }

  onBookSelect = selectBook => {
    this.setState({
      book: selectBook,
    });
  };

  render() {
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <BookList books={this.state.books} bookSelect={this.onBookSelect} />
            <BookDetail book={this.state.book} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
