import Vue from 'vue'
import Vuex from 'vuex'

// import {client} from '../axiosClient'
import _ from 'lodash';


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      Sociallinks:[
          {
              icon:'mdi-linkedin',
              src:'https://www.linkedin.com/in/rodrigobraga0125/'
          },
          {
              icon:'mdi-github',
              src:'https://github.com/rodrigoCode-tech'
          },
          {
              icon:'mdi-instagram',
              src:'https://www.instagram.com/rodrigobraga_dev/'
          }
      ],
      projects: [
          {
                name:"FinexTi",
                description:"Sistema Financeiro",
                tech_stack:["Django"],
                img:"https://res.cloudinary.com/dh3azc5sk/image/upload/v1610887992/Portfolio/images_61_bdofvp.jpg",
                url:"#"
            },
            {
                name:"CPF Generator",
                description:"Sistema web de geração de CPF e CNPJ", 
                tech_stack:["Django"],
                img:require("@/assets/cpfgenerator.png"),
                url:"https://cpf-generator.netlify.app/"
            },
            {
                name:"PDV Web",
                description:"Sistema de vendas Web",
                tech_stack:["Django"],
                img:require("@/assets/pdvweb.gif"),
                url:"#"
            },
        ]

      

  },
    mutations:{
        // addProjects(state,projects){
        //   state.projects = projects
        // }
    },
    getters:{
        projectChunks(state){
            return _.chunk(state.projects,2)
        }
    },
    actions:{
        // async getProjects({commit}){
        //     //let url='http://localhost:8000/projects'
        //     let res=await client.get('projects');
        //     console.log(JSON.stringify(res));
        //     commit('addProjects',res.data);

        // }

    }



})
