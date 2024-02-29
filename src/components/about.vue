<template>
    <div id="about"> 
      <v-row>
          <v-col class="col-xs-12">
            
            <h2> Sobre Mim</h2>
            <p> Sou Márcio Rodrigo, Graduado em Análise e Desenvolvimento de Sistemas</p>
            <p> Possuo experiência comprovada em desenvolvimento de sistemas nas seguintes tecnologias: Spring Boot, Spring Data JPA, Spring security, Hibernate, Flyway, OAuth2, JUnit5, Mockito, Docker, GIT , CI/CD, Github Actions , Sonar , Desing Patterns, arquitetura de microsserviços , Clean code, Frontend utilizando Vue.js.</p>
            <p> </p>
          </v-col>
          <v-col class="col-xs-12">
              <v-img src="../assets/WhatsApp Image 2024-02-27 at 17.17.02-Photoroom.jpg" max-width="500px" contain >

              </v-img>
          </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
    name : 'about'
}
</script>


<style lang="scss" scoped > 
    #about{
        padding-left: 10%;

       h2{  
           text-transform: uppercase;
           font-weight: bold;
           color:var(--accent-color);
           padding-top:15px;
        }
        p {
             padding-block: 10px;
             padding-right: 10px;
             font-weight: 400;
             color: var(--gray);
             font-size: 1.3em;
        }
    }

</style>