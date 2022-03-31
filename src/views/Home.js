import React from "react";
//menggunakan fragment
import MainLayout from "../layouts/MainLayout";

// jika tidak menggunakan fragment
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

class Home extends React.Component{
    state = {
        skills : [
            {
                id: 1,
                name: "Javascript",
                description: "Javascript Description",
                image: require("../images/js.png")
            },
            {
                id: 2,
                name: "React",
                description: "React Description",
                image: require("../images/react.png")
            },
            {
                id: 3,
                name: "Vue",
                description: "Vue Description",
                image: require("../images/vue.png")
            },
            {
                id: 4,
                name: "Svelte",
                description: "Svelte Description",
                image: require("../images/svelte.png")
            },
        ]
    }


    render(){
        const {skills} = this.state;
        return(
        <MainLayout>
            <h1 style={{ paddingLeft: "6rem" }}>Home Page</h1>
            <div style={container}>
                {skills.map(item => 
                    <div key={item.id} style={card}>
                        <img src={item.image} alt={item.name} style={img}/>
                        <h3>{item.name}</h3>
                    </div>    
                )}
            </div>
        </MainLayout>
        )
    }
}

export default Home;

const container = {
    display: "flex",
    padding: "0 6rem",
    justifyContent: "space-between"
}

const card = {
    width: "20%",
    height: "15rem"
}

const img = {
    width: "100%",
    height: "100%",
}