import "./App.css";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";

function App() {
  const libros = [
    {
      imagen: "https://picsum.photos/id/234/200",
      title: "Titulo 1",
      description: "Descripcion 1",
    },
    {
      imagen: "https://picsum.photos/id/235/200",
      title: "Titulo 2",
      description: "Descripcion 2",
    },
    {
      imagen: "https://picsum.photos/id/236/200",
      title: "Titulo 3",
      description: "Descripcion 3",
    },
  ];

  return (
    <>
      <Navbar title="Biblioteca de Libros" />
      <div className="container mt-3">
        <div className="row">
          {libros.map((libros, index) => (
            <div className="col-md-4" key={index}>
              <BookCard {...libros} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
