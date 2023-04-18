import React from "react";
import "./Searchbar.css";
import { ImSearch } from "react-icons/im";
import Navigation from "../header/NavbarComp";
import { Fragment } from "react";

export default function SearchBar(WrappedComponent, searchFunction) {
  return class extends React.Component {
    // On retourne un nouveau composant
    constructor(props) {
      super(props);
      this.state = {
        searchTerm: "",
        updatedSearchTerm: "", // On ajoute une variable d'état pour notre nouvelle fonctionnalité
      };
    }

    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    modifyValue(e) {
      e.preventDefault();
      this.setState({ updatedSearchTerm: this.state.searchTerm });
    }

    filterData = (updatedSearchTerm) => {
      updatedSearchTerm = updatedSearchTerm.toUpperCase();
      return this.props.data.filter((item) => {
        return searchFunction(item, updatedSearchTerm); // Ici on utilise la fonction de filtre passé en paramètre dans notre HOC												// Cela nous permet de personnalisé le comportement de la fonctionnalité de recherche
      });
    };

    render() {
      // Dans le rendu on recrée le composant de base, avec des ajouts au besoins
      let filteredData = this.filterData(this.state.updatedSearchTerm);

      return (
        <Fragment>
          <Navigation
            className="gradiant"
            E={
              <form>
                <div className="px-2   ms-auto inline-flex ">
                  <div className="flex">
                    <input
                      type={"search"}
                      onChange={this.handleSearch}
                      value={this.state.searchTerm}
                      className="form-control   hover:outline-cod-gray-100  outline outline-offset-2 outline-2 outline-transparent pointer-events-auto px-2 space-x-2 rounded-full sm:w-46 md:w-96 lg:w-96 justify-items-end  flex-row flex-auto min-w-0 block  py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding    transition ease-in-out m-0 focus:border-transparent focus:shadow-cod-gray-100 focus:text-gray-700 "
                      placeholder="Recherche"
                      aria-label="Search"
                      aria-describedby="button-addon3"
                    ></input>

                    <button
                      onClick={(e) => this.modifyValue(e)}
                      className=" inline-block ml-2 px-6  outline-transparent py-2  active:scale-90 bg-violet-600 font-medium  text-xs leading-tight uppercase rounded-full hover:outline-cod-gray-100  outline outline-offset-2 outline-2  active:bg-violet-700    "
                      type="submit"
                      id="button-addon3"
                    >
                      <ImSearch className=" outline-none" size={15} />
                    </button>
                  </div>
                </div>
              </form>
            }
          />
          <WrappedComponent {...this.props} data={filteredData} />
        </Fragment>
      );
    }
  };
}
