<template>
  <div id="Home">
    <div class="titleZone">
      <h3 class="title">Cruzr Configuración de Campaña</h3>
    </div>
    <div class="home">
      <b-form @submit="onClick">
        <b-row>
          <b-col>
            <b-row>
              <h6>
                <strong>Discurso</strong>
              </h6>
            </b-row>
            <b-row>
              <textarea v-model="message" 
              class="span10" 
              rows="5" 
              placeholder="Ingrese campaña" 
              required></textarea>
            </b-row>
          </b-col>
          <b-col>
            <b-row>
              <h6>
                <strong>Expresión</strong>
              </h6>
            </b-row>
            <b-row>
              <b-form-select
                v-model="expresion"
                :options="expressionsOptions"
                required
                size="sm"
                class="w-75 custom-expresion"
              ></b-form-select>
            </b-row>
          </b-col>
          <b-col>
            <b-row>
              <h6>
                <strong>Movimiento</strong>
              </h6>
            </b-row>
            <b-row>
              <b-form-select
                v-model="movement"
                :options="movementOptions"
                required
                size="sm"
                class="w-75 movimiento"
              ></b-form-select>
            </b-row>
          </b-col>
          <b-col>
          <div class="upload-btn-wrapper">
            <button class="btn">Seleccionar imagen</button>
            <input
              type="file"
              id="files"
              name="files"
              @change="onFileSelected"
            />
          </div>
          </b-col>
          <b-col>
          <b-button
            style="background-color:black;color: white;"
            type="submit"
            class="btn2"
            size="sm"
            >Subir</b-button
          >
          </b-col>
          <b-col>
            <b-row>
              <br />
              <br />
            </b-row>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import FirebaseService from "../services/FirebaseService"
export default {
  name: "Home",
  components: {},
  data() {
    return {
      message: "",
      grupo: "",
      expresion: "",
      movement: "",
      payload: "",
      img: "",
      name: "",
      order: "",
      movementOptions: [
      { value: "year", text: "Movimiento 1" },
      { value: "quarter", text: "Movimiento 2" },
      { value: "gender", text: "Movimiento 3" },
      { value: "use", text: "Movimiento 4" },
      { value: "origin", text: "Movimiento 5" }
    ],
      expressionsOptions: [
      { value: "year", text: "Expresión 1" },
      { value: "quarter", text: "Expresión 2" },
      { value: "gender", text: "Expresión 3" },
      { value: "use", text: "Expresión 4" },
      { value: "origin", text: "Expresión 5" }
    ]

    };
  },
  methods: {
     onFileSelected(event) {
        this.selectedFile = event.target.files[0]
        this.name = event.target.files[0].name
        const reader = new FileReader();
        if (this.selectedFile) {
          reader.readAsDataURL(this.selectedFile);
          reader.onload = async () => {
            this.img = await reader.result
          };
        }
    },
    onClick: async function() {
        this.payload = {
          message: this.message,
          movements: this.movement,
          expresions: this.expresion,
          media: this.img,
          name: this.name,
          order: this.order
        };
    try {
        const response = await FirebaseService.createCampaing(this.payload);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
</script>

<style lang="stylus">
.home {
  padding-top: 20px;
  padding-left: 7%;
  padding-right: 1%;
  padding-bottom: 10px;
}

.btn2 {
  margin-bottom: 20px;
  margin-top: 25px;
}

.custom-expresion {
  padding-left: 7%;
}

.title {
  padding-left: 7%;
  font-weight: bold;
}



.upload-btn-wrapper {
  margin-top: 30px;
  margin-left: 7%;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid gray;
  color: white;
  background-color: black;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
