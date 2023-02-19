import React, { useState } from 'react';
import  "./Searchbar.css";
import {ImSearch} from 'react-icons/im'

export default  function withSearch(WrappedComponent, searchFunction){
  return class extends React.Component {		// On retourne un nouveau composant
		constructor(props) {
			super(props);
			this.state = {
				searchTerm: ""					// On ajoute une variable d'état pour notre nouvelle fonctionnalité
			};
		}

		handleSearch = event => {
			this.setState({ searchTerm: event.target.value });
		}

		filterData = (searchTerm) => {
			searchTerm = searchTerm.toUpperCase();
			return this.props.data.filter( (item) => {
				return searchFunction(item, searchTerm);	// Ici on utilise la fonction de filtre passé en paramètre dans notre HOC
															// Cela nous permet de personnalisé le comportement de la fonctionnalité de recherche
			});
		}
		
    render() {								// Dans le rendu on recrée le composant de base, avec des ajouts au besoins
			let filteredData = this.filterData(this.state.searchTerm);

    return(
        <div>
        <input type={"search"} onChange={this.handleSearch} value={this.state.searchTerm} className="form-control rounded-full sm:w-46 md:w-96 lg:w-96 justify-items-end  flex-row flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700  border-l-violet-600 focus:bg-white focus:border-violet-600 focus:outline-violet-600" 
                    placeholder="Recherche" aria-label="Search" aria-describedby="button-addon3"></input>
                    <WrappedComponent {...this.props} data={filteredData} />
        <button className=" inline-block ms-auto px-6 transition ease-in hover:scale-200 py-2 border-2 border-violet-600 text-violet-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 " 
                                    type="button" id="button-addon3">
          <ImSearch size={15} />
        </button>
      </div>
    )
    }
  }
}
