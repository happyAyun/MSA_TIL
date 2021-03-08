import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BookContainer from "./container/BookContainer";
import BookListContainer from "./container/BookListContainer";
import { inject, observer } from "mobx-react";

@inject("BookStore") // 부모에 BookStore가 있다면 BookStore로 사용하라.
@observer
class App extends Component {
  render() {
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <BookListContainer />
            <BookContainer />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
