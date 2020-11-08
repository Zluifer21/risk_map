<template>
  <v-container>
  <v-row>
    <v-col cols="12" md="8">
      <l-map
            ref="map"
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="z-index: 0; height: 800px;"
    >
      <l-tile-layer
              :url="url"
              :attribution="attribution"
      />
        <l-geo-json
                :geojson="sub_geojson"
                :options="sub_options"
        />
        <l-geo-json
                :geojson="geojson"
                :options="options"
        />

        </l-map>
    </v-col>
    <v-col
            class="d-flex"
            cols="12"
            sm="6"
            md="4"
    >
      <v-row>
        <v-col md="6">
          <v-select
                  :items="barrios"
                  :item-text="'properties.name'"
                  :item-value="'properties.ID_KEY'"
                  label="Geografias"
                  v-model="geografia_ID_KEY"
                  @change="fill_sub_barrios"
          ></v-select>
        </v-col>
        <v-col       class="d-flex"
                     cols="12"
                     sm="6"
                     md="6">
          <v-select
                  :items="sub_barrios"
                  :item-text="'properties.OBJECTID_1'"
                  :item-value="'properties.OBJECTID_1'"
                  label="Sub Geografias"
                  v-model="OBJECTID_1"

          ></v-select>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { LMap, LTileLayer,LGeoJson } from "vue2-leaflet";
import { latLng } from "leaflet";
import geografias from '../assets/jsons/barrios.geo.json'
import _ from 'lodash'

  export default {
    name: 'HelloWorld',
     components: {
      LMap,
      LTileLayer,
       LGeoJson
  },
    data: () => ({
      barrios:[],
      OBJECTID_1:null,
      sub_barrios:[],
      sub_geojson:[],
      geografia_ID_KEY:null,
      zoom: 12,
      center: latLng(11.248702, -74.205179),
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoiemx1aWZlcjIxIiwiYSI6ImNqbmVyZ2RydDE3aTMzd3A4bnhpd2Q2cWkifQ.Pe5NcznXOZe9P3eAHEMpFA',
      attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      posmaker:latLng(47.41422, -1.250482),
      currentZoom: 12,
      currentCenter: latLng(11.248702, -74.205179),
      showParagraph: false,
      mapOptions: {
       // zoomSnap: 0.5
      },
      showMap: true,
      geojson:null

    }),
    mounted() {
      this.ini();
    },
    methods: {
      ini(){
        this.geojson=geografias;
        this.barrios=_.uniqBy(_.filter(this.geojson.features,obj=>obj.properties.name!=''), 'properties.ID_KEY');
      },
      fill_sub_barrios(){
        this.sub_barrios=_.filter(geografias.features,obj=>obj.properties.ID_KEY===this.geografia_ID_KEY);
      },
      fill_sub_geografia(){
       // console.log(geografias)
        this.geojson=_.filter(geografias.features,obj=>obj.properties.OBJECTID_1===this.OBJECTID_1);
        this.sub_geojson=_.filter(geografias.features,obj=>obj.properties.ID_KEY===this.geografia_ID_KEY && obj.properties.OBJECTID_1!=this.OBJECTID_1);
      }

    },
    watch:{
      OBJECTID_1(){
        this.fill_sub_geografia();
      }
    },
    computed: {
      options() {
        return {
          onEachFeature: this.onEachFeatureFunction
        };
      },
      sub_options(){
        return {
          onEachFeature: this.onEachFeatureFunction_sub
        };
      },
      onEachFeatureFunction() {
           return (feature, layer) => {
          {
            //console.log(feature);
            layer.on('click', function() {
            // clicked_feature(layer.feature.properties.ID_KEY,layer.feature.properties.OBJECTID_1);
            //console.log(layer.feature.properties.ID_KEY);
             });
            if (16 <= feature.properties.Suma_VFESA && feature.properties.Suma_VFESA < 27) {
              //return {color: , fillColor: '#2bff67', fillOpacity: 0.3};
              layer.setStyle({
                color: 'blue',
                fillColor:'#2bff67' ,
                fillOpacity: 0.5,
              })
              //layer.setStyle
            } else if (27 <= feature.properties.Suma_VFESA && feature.properties.Suma_VFESA < 38) {
              layer.setStyle({
                color: 'blue',
                fillColor: '#fff803',
                fillOpacity: 0.5,
              })
              //return {color: 'white',fillColor: '#fff803', fillOpacity: 0.3};
            } else {
              layer.setStyle({
                color: 'blue',
                fillColor: '#ff1a2c',
                fillOpacity: 0.5,
              })
              //return {color: 'white',fillColor: '#ff1a2c', fillOpacity: 0.3};
            }
          }

        };
      },
      onEachFeatureFunction_sub() {
        return (feature, layer) => {
          {
            //console.log(feature);
            layer.on('click', function() {
              // clicked_feature(layer.feature.properties.ID_KEY,layer.feature.properties.OBJECTID_1);
              //console.log(layer.feature.properties.ID_KEY);
            });
            if (16 <= feature.properties.Suma_VFESA && feature.properties.Suma_VFESA < 27) {
              //return {color: , fillColor: '#2bff67', fillOpacity: 0.3};
              layer.setStyle({
                color: 'white',
                fillColor:'#2bff67' ,
                fillOpacity: 0.5,
              })
              //layer.setStyle
            } else if (27 <= feature.properties.Suma_VFESA && feature.properties.Suma_VFESA < 38) {
              layer.setStyle({
                color: 'white',
                fillColor: '#fff803',
                fillOpacity: 0.5,
              })
              //return {color: 'white',fillColor: '#fff803', fillOpacity: 0.3};
            } else {
              layer.setStyle({
                color: 'white',
                fillColor: '#ff1a2c',
                fillOpacity: 0.5,
              })
              //return {color: 'white',fillColor: '#ff1a2c', fillOpacity: 0.3};
            }
          }

        };
      }
    },
  }
</script>
