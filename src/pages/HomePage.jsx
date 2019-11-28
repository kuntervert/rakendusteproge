import React from "react";
// import {laptops, phones} from "./mydatabase";

import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";

class HomePage extends React.PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            items:[] ,
            allCategories: ["phones", "laptops"],
            selectedCategories: ["phones"],
        };
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems = () => {
        fetch("/api/items")
          .then(res =>{
              console.log("res", res);
              return res.json();
          })
          .then( items => {
              console.log("items", items);
              this.setState({
                items
              });
          })
          .catch(err =>{
              console.log("err", err);
          });
    };
handleFilterSelect = (event) => {
    const categoryName = event.target.name;
    if(this.isSelected(categoryName)) {
     return this.unselectCategory(categoryName);
    }
        this.selectCategory(categoryName);
    };

    selectCategory = (categoryName) => {
        this.setState({
            selectedCategories: this.state.selectedCategories.concat([categoryName])
        });
    };

    unselectCategory = (categoryName) => {
        const newArray = this.state.selectedCategories.filter( cn => cn !== categoryName);

        this.setState({
            selectedCategories: newArray
        });
    };

    getSelectedItems = () => {
      return this.state.items.filter( item => this.isSelected(item.category));
    };

isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;


render(){
      console.log("this state", this.state);
        return (
            <>
            {
                this.state.allCategories.map(categoryName => {
                    return (
                        <Checkbox
                            key = {categoryName}
                            name = {categoryName}
                            onChange = {this.handleFilterSelect}
                            checked = {this.isSelected(categoryName)}
                            />
                    );
                })
            }
                
                <ItemList items={this.getSelectedItems()}/>  
            </>
        );
    }
}


export default HomePage;