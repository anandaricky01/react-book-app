import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { allBooks } from "./books";
import Book from "./Book";

const Main = () => {
  return (
    <>
      <main className="bg-sky-200">
        <BookList />
      </main>
    </>
  );
};

const BookList = () => {

  return (
    <>
      <section className="m-auto p-3">
        <h2 className="text-center font-bold text-2xl mb-5">Books Section</h2>
        <div className="grid grid-cols-3 gap-4 ">
          {allBooks.map((book) => {
            return (
              <>
                <Book {...book} key={book.id}/>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);
