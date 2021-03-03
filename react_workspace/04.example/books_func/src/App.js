import BookDetail from "./component/BookDetail";
import BookList from "./component/BookList";
import Books from "./Books";
import { Grid } from "semantic-ui-react";
import React, { useState } from "react";

function App() {
  const [books] = useState(Books);
  const [book, setBook] = useState(Books[0]);

  return (
    <div>
      <Grid columns={2}>
        <Grid.Row>
          <BookList
            books={books}
            bookSelect={selectBook => {
              setBook(selectBook);
            }}
          />
          <BookDetail book={book} />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
